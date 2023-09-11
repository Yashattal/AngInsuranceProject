import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { DisplayComponent } from './display/display.component';
import { AbstractHttpComm, HttpComm } from 'HttpComm';
import { CustnameComponent } from './custname/custname.component';
import { PolidComponent } from './polid/polid.component';
import { UpdatecompComponent } from './updatecomp/updatecomp.component';
import { OperationsComponent } from './operations/operations.component';
import { MonthComponent } from './month/month.component';
import { AddpolComponent } from './addpol/addpol.component';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { RestrictedAccessComponent } from './restricted-access/restricted-access.component';
import { BarchartComponent } from './barchart/barchart.component';
import { NgChartsModule } from 'ng2-charts';
import { CanvasJSAngularChartsModule } from '@canvasjs/angular-charts';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DisplayComponent,
    CustnameComponent,
    PolidComponent,
    UpdatecompComponent,
    OperationsComponent,
    MonthComponent,
    AddpolComponent,
    LoginComponent,
    HeaderComponent,
    RestrictedAccessComponent,
    BarchartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CanvasJSAngularChartsModule,
    FormsModule,
    
  ],
  providers: [{provide:AbstractHttpComm,useClass:HttpComm}],
  bootstrap: [AppComponent]
})
export class AppModule { }
