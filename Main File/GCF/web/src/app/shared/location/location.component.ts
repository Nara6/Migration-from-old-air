import { Component, OnInit, Input } from '@angular/core';
// Import Helper function 
import { LocationService } from './location.service';
import { FormGroup, FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-location',
  templateUrl: './location.component.html'
})
export class LocationComponent implements OnInit{
  
  public isLoading:boolean = false;

    @Input() data         : any = null;
    @Input() provinces        : any = null;
    @Input() title        : any = '';
    @Input() comment      : any = null; 
    @Input() status       : any = null; 
    @Input() field        : string = ''; 

    public districts  : any =[];
    public communes   : any =[];
    public villages   : any =[];
    public form: FormGroup;

    public locationData = {
      province: 0,
      district: 0,
      commune: 0,
      village: 0,
    };

    constructor(
        private service: LocationService,
        private _formBuilder: FormBuilder,

    ) { 
    }
 
    ngOnInit(): void {
      
       console.log(this.data);
      //console.log(this.provinces);
    } 

    ngOnChanges() { 

      if(!this.data){
       
      }else{

        if(this.data.province_id){
          this.service.setupDistricts( this.data.province_id).subscribe(res =>{
            this.districts = res;
          })
        }

        if(this.data.district_id){
          this.service.setupCommunes( this.data.province_id, this.data.district_id).subscribe(res =>{
        
            this.communes = res;
          })
        }

        if(this.data.commune_id){
          this.service.setupVillages(this.data.province_id, this.data.district_id, this.data.commune_id).subscribe(res =>{
            this.villages = res;
           // console.log(this.villages);
          })
        }
        // if(this.data.village_id){
        //   this.service.setupVillages(this.data.province_id, this.data.district_id, this.data.district_id).subscribe(res =>{
        //     this.villages = res;
        //    // console.log(this.villages);
        //   })
        // }
       
        

        


      }

      this.buildForm();
    }

    buildForm(){
      this.form = this._formBuilder.group({
          province  : [this.data ? this.data.province_id : '',],
          district  : [this.data ? this.data.district_id : '',],
          commune   : [this.data ? this.data.commune_id : '',],
          village  : [this.data ? this.data.village_id : '']

      });
     
    }

    districtFilter($event){

   
      
      this.provinces.forEach(el =>{
        // console.log(this.provinces[0].province_id)

        if( el.id == $event.value ){
         // console.log($event)
          if('districts' in el){
  
            this.districts = el.districts; 
              this.communes = []; 
              this.villages = []; 
           
          }else{

            this.service.setupDistricts($event.value).subscribe(res =>{
              el.districts = res; 
  
              this.districts = res; 
                this.communes = []; 
                this.villages = []; 
              
            })
          }
          
        }
  
      });
    }

    communeFilter($event){

      let districts = this.districts; 
      //console.log(this.districts);
      
      let communes = []; 
      this.form.get('commune').setValue(null);
      this.form.get('village').setValue(null);
      this.communes = []; 
      this.villages = []; 
      if(districts.length == 0 ){
       
        this.service.setupCommunes( this.form.get('province').value, $event.value).subscribe(res =>{
          communes = res; 
          this.communes = res;
        })
      }
    
      districts.forEach(el =>{
        
        if( el.id == $event.value ){
          if('communes' in el){
            communes = el.communes; 
            this.communes = communes;
              this.villages = [];
          }else{
            this.service.setupCommunes( this.form.get('province').value, $event.value).subscribe(res =>{
              el.id = res; 
              communes = res; 
              this.communes = communes;
              this.villages = [];
              
            })
          }
        }
      });
    }

    villageFilter($event){

        //this.locationData.commune = $event.value;
        this.form.get('village').setValue(null);
        let communes = this.communes; 
        let villages = []; 

        if(communes.length == 0){

          this.service.setupVillages(this.form.get('province').value, this.form.get('district').value, $event.value).subscribe(res =>{
    
            // el.villages = res; 
            this.villages = res;

          })

        }else{

         
          this.communes.forEach(el =>{

            //console.log(el); 

            if( el.id == $event.value ){

              if('villages' in el){
                villages = el.villages; 
                this.villages = villages;
              }else{
                this.service.setupVillages(this.form.get('province').value, this.form.get('district').value, $event.value).subscribe(res =>{
                  el.villages = res; 
                  this.villages = res;
                  console.log(this.villages);
                })
              }

            }

          });
        }

        
    } 

    getValue(){
      this.form.markAllAsTouched(); 
      return { valid:this.form.valid, value: this.form.value }; 
    }
  

}

