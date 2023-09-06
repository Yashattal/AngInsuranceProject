import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { DisplayComponent } from './display/display.component';
import { AbstractHttpComm, HttpComm } from 'HttpComm';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DisplayComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [{provide:AbstractHttpComm,useClass:HttpComm}],
  bootstrap: [AppComponent]
})
export class AppModule { }
