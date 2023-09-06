import { Component, Injectable } from '@angular/core';
import { AbstractHttpComm, Policy } from 'HttpComm';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})


export class HomeComponent {
  Policy!:Policy[];
  error!:string;
  constructor(private service:AbstractHttpComm){
  }
  ngOnInit(){this.getPol(); }

  getPol():void{
    let observable=this.service.GetPolicies();
    observable.subscribe({
      next:result=>{
        this.Policy=result;
        var p=10;
      },
      error:err=>this.error=err.message
    })
  }
}


