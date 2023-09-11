import { Component, OnInit } from '@angular/core';
import { AbstractHttpComm } from 'HttpComm';
// import { ChartDataset, ChartOptions } from 'chart.js';

export class ChartData {constructor(public label:string,
    public y:number){} }

@Component({
  selector: 'app-barchart',
  templateUrl: './barchart.component.html',
  styleUrls: ['./barchart.component.css']
})
export class BarchartComponent  {

  public error: string = '';
  chart: any;
  points:object[]=[];
  chartOptions = {
    title:{
      text: "Angular Pie Chart"  
    },
    animationEnabled: true,
    data: [{        
      type: "pie",
      dataPoints: this.points
    }]
};
getChartInstance(chart: object) {
    this.chart = chart;
    
  }
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
constructor(private service: AbstractHttpComm) { }

  ngOnInit(): void {
    this.getpolsoldmonth();
  }

//   barChartLabels = [
//     'January', 'February', 'March', 'April', 'May', 'June',
//     'July', 'August', 'September', 'October', 'November', 'December'
//   ];
 // barChartData : number[]=[];
 getpolsoldmonth(): void {
     let observable = this.service.Getpolsoldbymonth();
     observable.subscribe({
      next:(data) => {
       // var values=[];
         for(let obj of data)
         {
            this.points.push({label:obj.label,y:obj.y});
         }
         //this.points=data;
         this.chart.render();
      },
      error:(err) => {
        this.error = err.message;
      }}
    ); 
  } 
}












