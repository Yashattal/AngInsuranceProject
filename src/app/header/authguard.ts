

import { Injectable } from '@angular/core';
import {     CanActivate,Router } from '@angular/router';
import { Observable} from 'rxjs';
// import { CanActivate, Router } from '@angular/router';

 

@Injectable({

  providedIn: 'root'

})

export class authGuard implements CanActivate{
    constructor(private router: Router) { }

 

  canActivate( ) {

 

    if (sessionStorage.getItem('role') === 'Admin') {

        return true; // Allow access

      } else {

        // If not a manager, redirect to a different page (e.g., access denied)

        this.router.navigate(['/restricted-access']);

        return false;

      }

 

       
  }

}


 

  