import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree,Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private authService:AuthService,private router: Router){}
  canActivate(
    next: ActivatedRouteSnapshot,
    state:RouterStateSnapshot):boolean | UrlTree {
      if (this.authService.getCurrentUser()) {
        return true; // Usuario autenticado, permite el acceso a la ruta
      } else {
        // Usuario no autenticado, redirige a la página de inicio de sesión
        return this.router.parseUrl('/login');
      }
    }
  }
