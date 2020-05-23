import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
 
//Router
import { Router } from "@angular/router";

//Services
import { AuthService } from '../service/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor( private _authService: AuthService,
               private router: Router ) {}

  canActivate (): boolean {
      if ( !this._authService.isAuthenticated ) {
        this.router.navigate(['/login']);
        return false;
      }
      return true;
  }
  
}
