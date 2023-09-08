import { Component } from '@angular/core';
import { Policy, AbstractHttpComm } from 'HttpComm';

@Component({
  selector: 'app-polid',
  templateUrl: './polid.component.html',
  styleUrls: ['./polid.component.css']
})
export class PolidComponent {
  policy!:Policy;
  error!:string;
  constructor(private service:AbstractHttpComm){
    this.policy=new Policy(0,'',0,0,0);
  }

  ngOnInit(){}

    intValue!:number;
    showHtml: boolean = false;
    
    getById(){
      this.getPol(this.intValue); 
      this.showHtml = true;
    }

  getPol(Id: number):void{
    let observable=this.service.GetpolById(Id);
    observable.subscribe({
      next:result=>{
        this.policy=result;
      },
      error:err=>this.error=err.message
    })
  }
}
