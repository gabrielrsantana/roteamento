import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  //injeta nas rotas,onde será preciso usar
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
//criado para autenticar login e encaminhar as Rotas
constructor(private auth:AuthService,private router:Router){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if(!this.auth.estaAutenticado()){
      this.router.navigate(['login']); //retorna pro login se falso
      return false;
    }  

    return true;
  }
  
}
