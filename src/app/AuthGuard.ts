

import { Injectable } from '@angular/core';
import {     CanActivate,Router } from '@angular/router';

// import { CanActivate, Router } from '@angular/router';

 

@Injectable({

  providedIn: 'root'

})

export class AuthGuard implements CanActivate{
    constructor(private router: Router) { }

 

  canActivate( ):boolean {

 

    if (sessionStorage.getItem('role') === 'Admin') {

        return true; // Allow access

      } else {

        // If not a Admin, redirect to a different page (e.g., access denied)

       this.router.navigate(['/restricted-access']);

       return false;
        // return true;
      }

 

       
  }

}


 

  