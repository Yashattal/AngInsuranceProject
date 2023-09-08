import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DisplayComponent } from './display/display.component';
import { CustnameComponent } from './custname/custname.component';
import { PolidComponent } from './polid/polid.component';

const routes: Routes = [
  {path:'Home',component:HomeComponent},
  {path:'Display', component:DisplayComponent},
  {path:'Display/:id', component:DisplayComponent},
  {path:'Custname', component:CustnameComponent},
  {path:'polid', component:PolidComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }



