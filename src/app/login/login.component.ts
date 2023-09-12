import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from './LoginService';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  message:string='';

  constructor(private service:LoginService,private router:Router){}


  //months:string[]=[];
  getToken(userid:string, pwd:string):void{

    var observableObj=this.service.getTokenAndAccessProtectedResource(userid,pwd);

    observableObj.subscribe({

      next:(result: { body: any; })=>{

        var res = JSON.stringify(result.body);

        var output=JSON.parse(res);

        sessionStorage.setItem('token',output.token);

        sessionStorage.setItem('role',output.role);

        //this.router.navigate(['/med']);

        if(sessionStorage.getItem("role") == "User" || sessionStorage.getItem("role")=="Admin") {

          this.router.navigate(['/update']);

        }

       // alert(JSON.stringify(result.body));

      },

      error:(err: { message: string; })=>this.message=err.message

    });

  }


  
}

