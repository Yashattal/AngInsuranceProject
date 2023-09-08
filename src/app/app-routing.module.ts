import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DisplayComponent } from './display/display.component';
import { CustnameComponent } from './custname/custname.component';
import { PolidComponent } from './polid/polid.component';
import { UpdatecompComponent } from './updatecomp/updatecomp.component';
import { OperationsComponent } from './operations/operations.component';
import { MonthComponent } from './month/month.component';
import { AddpolComponent } from './addpol/addpol.component';

const routes: Routes = [
  {path:'Home',component:HomeComponent},
  {path:'Display', component:DisplayComponent},
  {path:'Display/:id', component:DisplayComponent},
  {path:'Custname', component:CustnameComponent},
  {path:'polid', component:PolidComponent},
  {path:'updatecomp', component:UpdatecompComponent},
  {path:'operations', component:OperationsComponent},
  {path:'month', component:MonthComponent},
  {path:'addpol',component:AddpolComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }



