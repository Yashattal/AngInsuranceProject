import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AbstractHttpComm, Policy } from 'HttpComm';

@Component({
  selector: 'app-addpol',
  templateUrl: './addpol.component.html',
  styleUrls: ['./addpol.component.css']
})

export class AddpolComponent {
  pol!:Policy;
  error!:string;
  statusDetails:string='';
  constructor(public service:AbstractHttpComm,private router:Router){
    this.pol = new Policy(0,'',0,0,0);

}

ngOninit(){}

add():void{
  var observableResult =this.service.Addpolicy(this.pol);
  observableResult.subscribe({
  next:(r:any)=>{   if(r.status=='200')
  { this.statusDetails='Record Added...';
      alert('Record Added...');
      this.router.navigate(['Display']);
  }
    //alert(JSON.stringify(r));
   },
  error:er=>this.statusDetails="Bad Request"
  })
}
}
