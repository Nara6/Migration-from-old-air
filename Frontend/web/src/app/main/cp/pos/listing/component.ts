// ===================================================================>> Core Library
import { Component, OnInit, ViewEncapsulation, ViewChild, TemplateRef } from '@angular/core';
import { Router } from '@angular/router';

// ===================================================================>> Third Library
import { MatDialog, MatSnackBar } from '@angular/material';
import * as moment from 'moment';

// ===================================================================>> Custom Library
import { fuseAnimations } from '@fuse/animations';
import { environment as env } from '../../../../../environments/environment';
import { Service } from '../service';

import { ViewDialogComponent } from './view/view.dialog.component';

@Component({
  templateUrl: './template.html',
  styleUrls: ['./style.scss'],
  encapsulation: ViewEncapsulation.None,
  animations: fuseAnimations
})
export class ListingComponent implements OnInit {

  public data: any[] = [];
  public fileUrl = env.fileUrl;
  public discount: number = 0;
  public is_unpaid: number = 0;
  public time: string = '';
  public cashier: string = '';
  public customer: any = null;
  public type: string = '';
  constructor(

    private _service: Service,
    private _router: Router,
    private _snackBar: MatSnackBar,
    private _dialog: MatDialog,

  ) { }

  // -----------------------------------------------------------------------------------------------------
  // @ Lifecycle hooks
  // -----------------------------------------------------------------------------------------------------
  /**
   * On init
   */
  ngOnInit(): void {

    this.cashier = localStorage.getItem('name');
    this._service.listing({}).subscribe(res => {
      this.data = res;

    })
  }

  // =================================  >> Add to cart
  public cart: any[] = []; // An Empty Cart. 
  addToCart(incomingItem: any, qty = 0) {
    //console.log(incomingItem); 

    let isExisting: boolean = false;

    let item: any = {
      id: incomingItem.id,
      name: incomingItem.name,
      qty: qty,
      temp_qty: qty,
      unit_price: incomingItem.unit_price,
    };

    //If cart is not empty, find added item and update its new QTY. 
    if (this.cart.length > 0) {

      //console.log('Cart is not empty.'); 
      let j = 0;

      //Loop inside the cart to find existing item; 
      this.cart.forEach(cartItem => {

        //Found the existing item (compared by incoming id)
        if (cartItem['id'] == incomingItem.id) {

          isExisting                = true;
          this.cart[j]['qty']       = parseInt(cartItem['qty']) + qty; //Update QTY: the existing qty + incoming qty
          this.cart[j]['temp_qty']  = parseInt(cartItem['qty']);
          
        }

        j++;
      })

    }

    // If the incoming item is not found, add this new item to Cart
    if (!isExisting) {
      this.cart.push(item);
    }

    //console.log(this.cart); 
    // ===>> Refresh Total Price to display in UI
    this.getTotalPrice();

  }

  // ===============================>> Get total price
  public totalPrice: number = 0;
  getTotalPrice() {

    let total = 0;
    this.cart.forEach(item => {

      total += parseInt(item.qty) * parseInt(item.unit_price);

    });
    this.totalPrice = total;
  }

  // ================================>> Sub value 
  blur(event: any, index: number = -1) {

    const tempQty = this.cart[index]['qty'];
    if (event.target.value > 1000) {
      event.target.value = 1000;
    }

    if (!event.target.value) {

      this.cart[index]['qty'] = tempQty;
      this.cart[index]['temp_qty'] = tempQty;

    } else {

      this.cart[index]['qty'] = parseInt(event.target.value);
      this.cart[index]['temp_qty'] = parseInt(event.target.value);

    }

    this.getTotalPrice();

  }

  // =================================>> Remove
  remove(index: number = -1) {

    this.cart.splice(index, 1);
    this.getTotalPrice();

  }

  // ================================>> CheckOut
  public isOrderBeingMade: boolean = false;
  checkOut() {

    let cart: any = {};
    this.cart.forEach(item => {
      cart[item.id] = item.qty ;
    })

    // Convert variable cart to be a json string
    let data = {

      cart: JSON.stringify(cart)
      
    }

    this.isOrderBeingMade = true; // Update spinner in UI
    this.time = moment().format("dddd, MMMM Do YYYY, h:mm:ss a");
    this._service.checkOut(data).subscribe(

    //========================>> Success
    res => {

      this.isOrderBeingMade = false;
      this._snackBar.open(res.message, 'Message', { verticalPosition: "bottom", horizontalPosition: "right", duration: 5000, panelClass: ['green-snackbar'] });
      this.cart = [];
      this._dialog.open(ViewDialogComponent, { data: res.order });

    },

    //========================>> Success
    err => {

      this.isOrderBeingMade = false;
      this._snackBar.open('error', 'Message', { verticalPosition: "bottom", horizontalPosition: "right", duration: 5000, panelClass: ['red-snackbar'] });

    })

  }


}

