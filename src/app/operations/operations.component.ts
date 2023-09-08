import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AbstractHttpComm, Policy, policyHolder } from 'HttpComm';

@Component({
  selector: 'app-operations',
  templateUrl: './operations.component.html',
  styleUrls: ['./operations.component.css']
})
export class OperationsComponent {
  customer:policyHolder;
  policy!:Policy;
  statusDetails:string='';
  constructor(public service:AbstractHttpComm,private router:Router){
    this.customer = new policyHolder(0,'',new Date(),'','','','');
  }

  ngOnInit(){}

  update():void{
    var observableResult =this.service.UpdateCustDetails(this.customer);
    observableResult.subscribe({
      next:(r:any)=>{   if(r.status=='200')
      { this.statusDetails='Record Updated..';
          alert('Record updated..');
          this.router.navigate(['Display']);
      }
        //alert(JSON.stringify(r));
       },
      error:er=>this.statusDetails=er.message
    });
  }

  
}
