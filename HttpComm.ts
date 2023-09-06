import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';

export class Policy{
    constructor(public policyId:number, public policyName:string, 
    public coverageAmount:number,public premiumAmount:number, public num:number){}
}

export abstract class AbstractHttpComm{
    abstract GetPolicies():Observable<Policy[]>;
}

@Injectable({providedIn:'root'})
export class HttpComm extends AbstractHttpComm{
    url = 'http://localhost:5223';
    constructor(private client:HttpClient){ super();}

    override GetPolicies():Observable<Policy[]>{
        let path=`${this.url}/policies`;
        const headers = {headers:new HttpHeaders({observe:'response'})};
        var result = this.client.get<Policy[]>(path,headers); // make GET http request
        return result;
    }
}