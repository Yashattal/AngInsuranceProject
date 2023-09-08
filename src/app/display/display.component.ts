import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AbstractHttpComm, PolicySold } from 'HttpComm';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent {
  Policy:PolicySold[]=[];  
  error!:string;
  constructor(private service:AbstractHttpComm){
  }
  ngOnInit(){}
  showHtml:boolean=false;
  getById(id:string):void{
    //let id=this.activatedroute.snapshot.params['id'];
    this.showHtml=true;
    this.getCustomerPolicy(parseInt(id)); 
   
  }

  getCustomerPolicy(id: number):void{
    let observable=this.service.GetCustomerById(id);
    observable.subscribe({
      next:result=>{
        this.Policy=result;
      },
      error:err=>this.error=err.message
    })
  }
}
