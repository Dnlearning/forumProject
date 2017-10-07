import { UserService } from './../services/user.service';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';
@Injectable()
export class UserGuard implements CanActivate {
  constructor(
    private userService:UserService,
    private route:Router,

  ){}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    if(this.userService.isLoggedIn()){
      return true;
    }else{
      this.route.navigate(['/login'],{queryParams:{returnUrl: state.url}});
      return false;
    }
  }
}
