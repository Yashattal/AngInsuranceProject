import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AbstractHttpComm, phold_psold } from 'HttpComm';

@Component({
  selector: 'app-custname',
  templateUrl: './custname.component.html',
  styleUrls: ['./custname.component.css']
})
export class CustnameComponent {
    Policy:phold_psold[]=[];
    error!:string;
    constructor(private service:AbstractHttpComm){
    }
    ngOnInit(){}

    textInput:string='';
    showHtml: boolean = false;
    
    getByName(){
      // let name=this.activatedroute.snapshot.params['Name'];
      this.getCustomerbyname(this.textInput); 
      this.showHtml = true;
    }
  
    getCustomerbyname(name: string):void{
      let observable=this.service.GetCustByName(name);
      observable.subscribe({
        next:result=>{
          this.Policy=result;
        },
        error:err=>this.error=err.message
      })
    }
  }
  

