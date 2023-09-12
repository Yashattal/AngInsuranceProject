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
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { RestrictedAccessComponent } from './restricted-access/restricted-access.component';

import { AuthGuard } from './AuthGuard';
import { BarchartComponent } from './barchart/barchart.component';
// s

const routes: Routes = [
  {path:'Home',component:HomeComponent},
  {path:'Display', component:DisplayComponent},
  {path:'Display/:id', component:DisplayComponent},
  {path:'Custname', component:CustnameComponent},
  {path:'polid', component:PolidComponent},
  {path:'update', component:UpdatecompComponent},
  {path:'operations', component:OperationsComponent},
  {path:'month', component:MonthComponent},
  // {path:'addpol',component:AddpolComponent},
  {path:'login',component:LoginComponent},
  {path: '', redirectTo: 'login', pathMatch: 'full' },
  
  {path:'header',component:HeaderComponent},
  {path:'restricted-access',component:RestrictedAccessComponent},
  {path:'barchart',component:BarchartComponent},
  
  {
    path: 'addpol',
    component: AddpolComponent,
    canActivate: [AuthGuard] // Apply the AdminAuthGuard to protect this route
  },
  {
    path: 'restricted-access',
    component: RestrictedAccessComponent// Create this component to display an access denied message
  }
  // {path: 'barchart',component:BarchartComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }



