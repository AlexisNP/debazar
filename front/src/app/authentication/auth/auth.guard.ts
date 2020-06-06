import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> {
      let url: string = state.url;
      return this.checkLogin(url);;
  }

  canActivateChild(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> {
      return this.canActivate(route, state);
    }

  checkLogin(url: string): Observable<boolean> {
    if (this.authService.isLogged) {
      return of(true);
    }

    // Store the attempted URL for redirecting
    this.authService.redirectUrl = url;

    //Navigate to the login page with extras
    this.router.navigate(['connexion'])
    return of(false);
  }
}
