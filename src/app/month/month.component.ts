import { Component } from "@angular/core";
import { AbstractHttpComm, phold_psold } from "HttpComm";

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

 

  selectedMonthIndex: number=0;
  months:string[]=[
  'January','February','March','April','May','June','July','August','September','October',
   'November','December'
  ];

 

  selectedMonthNumber:number =1;
  fetchData(){
    // const selectedMonth = this.months[this.selectedMonthIndex];
    this.selectedMonthNumber = this.selectedMonthIndex+1;
    console.log(this.selectedMonthNumber);
    this.getByMonth(this.selectedMonthNumber);
  }
// txt!:number;
  showHtml: boolean = false; 

  getByMonth(val:number){
    // let name=this.activatedroute.snapshot.params['Name'];
    this.getCustomerByMonth(val); 
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