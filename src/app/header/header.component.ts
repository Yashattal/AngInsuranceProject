import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  isLoggedIn: boolean=false;//string | null = "";
  loginrole: string | null = "";
  constructor(private router: Router,){}
  ngOnInit(){
    this.isLoggedIn = sessionStorage.getItem('token')==null? false:true;
    this.loginrole = sessionStorage.getItem("role");
  }
  ngAfterViewChanged(){}
  logout(){
    sessionStorage.clear();
    this.router.navigate([""]);
  }
}
