
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

 

 

@Injectable({providedIn:'root'})
export class LoginService{
  url = "http://localhost:5269"; // check this port in REST API -> Properties -> launchSettings.json

 

  constructor(private client:HttpClient) {}
   getTokenAndAccessProtectedResource(userName:string, password:string):Observable<HttpResponse<TokenAndRole>>{
    const url = `${this.url}/login`;

 

    var credentials = new AppUserCredentialsModel(userName, password);
    const headers =new HttpHeaders({'content-type':'application/json'});
    var result = this.client.post<TokenAndRole>(url,credentials,{headers:headers, observe:'response'});

 

    return result;
}
}

 

 

export class TokenAndRole{
  constructor(public token:string, public role:string) {}
}

 

export class AppUserCredentialsModel{
  constructor(public userName:string, public password:string){}
}