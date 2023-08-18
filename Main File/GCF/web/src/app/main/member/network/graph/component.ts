//=========================================================>> Core Library
import { Component, OnInit,ViewChild, TemplateRef,ViewEncapsulation, AfterViewInit } from '@angular/core';

//=========================================================>> Third Library
import { MatDialog, MatSnackBar } from '@angular/material';
import { Network} from 'vis';

//=========================================================>> Custom Library
import { fuseAnimations } from '@fuse/animations';
import { Service } from '../service';
import { Option } from './option';

@Component({
    templateUrl  : './template.html',
    encapsulation: ViewEncapsulation.None,
    animations   : fuseAnimations
})
export class GraphComponent implements OnInit, AfterViewInit
{

    public container:any;
    public root:any; 
    public node: any; 
    public nodes:any = [];
    public edges:any = []; 
    public network:any; 
    public rootNodeId:any = 0;
    public isLoading:boolean = false;


    constructor(
      private _service : Service,
      private _snackBar: MatSnackBar,
      private _dialog : MatDialog,
  
    ){}

    ngOnInit(): void
    {
      //this.getRootNode();
    }

    ngAfterViewInit(){ 

      this.container = document.getElementById('binary-chart');
      this.network = new Network(this.container, {nodes:[], edges:[] }, Option);
  
  
      //Get Root Node
      this._service.getRootNode().subscribe(res=>{
        
          this.root = res; 
          this.node = res; 
          this.rootNodeId = this.node.id;
          this.nodes = [this.node]; 

          this.getNodes(this.node.id, '');
          localStorage.setItem('node', JSON.stringify(res));
  
      }); 
  
  
      //Interaction with Chart
      this.network.on("click",  (params) => {
       
        var nodeID = params.nodes[0];
        const node = this.nodes.find( el => el.id === nodeID );
  
        if(typeof nodeID == 'string'){
  
          var splits = nodeID.split('-');
         
          if(typeof splits[1] == 'string'){
  
            if(splits[1] == 'add'){
              this.confirmRegister({id: splits[0], direction: splits[2], uid:splits[3]}, nodeID); 
            }else if(splits[1] == 'more'){
             
              this.getNodes(parseInt(splits[0]), nodeID);
            }
            
          }
  
        }else{
      
          if(node){ //Valid Note
            this.viewMemberInfo(node);
          }
         
        }
          
      })
  
      
    }

    getNodes( nodeId:any = 0, removedNodeId:string = '' ){
    
      this.isLoading = true; 
      if(nodeId != 0){
        this._service.getDownlineNode({nodeId: nodeId}).subscribe( (res) =>{
  
          this.isLoading = false; 
          
          let newNodes = res.nodes; 
          let newEdges = res.edges; 
          
          let oldNodes = this.nodes; 
          let oldEdges = this.edges; 
  
        
          //Remove 'More' node by finding its index
          const index = oldNodes.findIndex(x => x['id'] == removedNodeId );
         
          if(index > 0){
            
            console.log(index);
            oldNodes.splice(index, 1);
           
          }
          
    
          let nodes = oldNodes.concat(newNodes);
          let edges = oldEdges.concat(newEdges);
    
          this.nodes = [...new Map(nodes.map(item => [item['id'], item])).values()];;
          this.edges = edges;
  
          //console.log(this.nodes);
    
          this.network.setData({ nodes:this.nodes, edges:this.edges });
          //this.network.setData(res);
          },  errors => {}
        );
      }
      
    }
  
  
    refresh(){
      
      this.nodes = [this.node]; 
      this.edges = [];
      this.getNodes(this.rootNodeId, '');
    }
  
    confirmRegister(node:any, removedNode:any= null): void {
      console.log(node); 
  
      // const dialogRef = this._dialog.open(NetworkMemberRegisterDialogComponent, {data:{ sponsor: this.root, node: node }, disableClose: false});
      //   dialogRef.afterClosed().subscribe((res) => {
      //   if(res){
      //    this.getNodes(node.id, removedNode); 
      //   }
      // });
  
    }
  
    viewMemberInfo(node:any): void {
      
      // const dialogRef = this._dialog.open(NetworkViewMemberInfoDialogComponent, { data:node, disableClose: true });
      //   dialogRef.afterClosed().subscribe((res) => {
      //   if(res){
      //   //this.getNodes(node.id); 
      //   }
      // });
  
    }
  

  }
  

