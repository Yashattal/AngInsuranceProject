import { Component } from '@angular/core';
import { AbstractHttpComm, policyHolder } from 'HttpComm';

@Component({
  selector: 'app-updatecomp',
  templateUrl: './updatecomp.component.html',
  styleUrls: ['./updatecomp.component.css']
})
export class 
UpdatecompComponent {
     customer:policyHolder[]=[];
     error!:string;
     constructor(private service:AbstractHttpComm){}
     ngOnInit(){}
}

