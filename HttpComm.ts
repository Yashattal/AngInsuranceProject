import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';

export class Policy{
    constructor(public policyId:number, public policyName:string, 
    public coverageAmount:number,public premiumAmount:number, public num:number){}
}

export class PolicySold{
    constructor(public Id:number,public policyId:number,public policyHolderId:number, public policyName:string, 
    public startDate:Date,public endDate:Date){}
}

export class phold_psold{
    constructor(public policyHolderId:number,public name:string,
        public policyName:string,public startDate:Date,public endDate:Date ){}
}


export abstract class AbstractHttpComm{
    abstract GetPolicies():Observable<Policy[]>;
    abstract GetCustomerById(policyHolderId: number):Observable<PolicySold[]>;
    abstract GetCustByName(Name:string):Observable<phold_psold[]>;
    abstract GetpolById(policyId:number):Observable<Policy>;
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

    override GetCustomerById(policyHolderId: number):Observable<PolicySold[]>{
        let path = `${this.url}/policies/policyholder/${policyHolderId}`;
        const headers = {headers:new HttpHeaders({observe:'response'})};
        var result = this.client.get<PolicySold[]>(path,headers); 
        return result;
    }

    override GetCustByName(customerName:string):Observable<phold_psold[]>{
        let path = `${this.url}/policies/customer/${customerName}`;
        const headers = {headers:new HttpHeaders({observe:'response'})};
        var result = this.client.get<phold_psold[]>(path,headers); 
        return result;
    }

    override GetpolById(policyId:number):Observable<Policy>{
        let path = `${this.url}/policies/${policyId}`;
        const headers = {headers:new HttpHeaders({observe:'response'})};
        var result = this.client.get<Policy>(path,headers); 
        return result;
    }
}