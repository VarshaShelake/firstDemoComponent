import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { ResolveguardService } from './services/resolveguard.service';

@Injectable({
  providedIn: 'root'
})
export class ResolveguardGuard implements Resolve<any> {
constructor(private resolveGuardService : ResolveguardService){

}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    // return this.resolveGuardService.product;
    return this.resolveGuardService.getUsers();
  }
  
}
