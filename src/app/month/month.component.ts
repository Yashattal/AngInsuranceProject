import { Component } from '@angular/core';
import { AbstractHttpComm, phold_psold } from 'HttpComm';

@Component({
  selector: 'app-month',
  templateUrl: './month.component.html',
  styleUrls: ['./month.component.css']
})
export class MonthComponent {

  Policy:phold_psold[]=[];
  error!:string;
  constructor(private service:AbstractHttpComm){
  }
  ngOnInit(){}

 // txt!:number;
  showHtml: boolean = false;
  
  getByMonth(val:string){
    // let name=this.activatedroute.snapshot.params['Name'];
    this.getCustomerByMonth(parseInt(val)); 
    this.showHtml = true;
  }

  getCustomerByMonth(id: number):void{
    let observable=this.service.GetpolicybyMonth(id);
    observable.subscribe({
      next:result=>{
        this.Policy=result;
      },
      error:err=>this.error=err.message
    })
  }
}



