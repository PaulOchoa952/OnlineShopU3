import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private users = [
    { username: 'usuario1', password: '1234' },
    { username: 'usuario2', password: 'contrasena2' },
  ];

  login(username: string, password: string): boolean {
    const user = this.users.find((u) => u.username === username && u.password === password);
    if (user) {
      // Usuario autenticado
      localStorage.setItem('currentUser', JSON.stringify(user));
      return true;
    }
    // Usuario no autenticado
    return false;
  }

  logout(): void {
    localStorage.removeItem('currentUser');
  }

  getCurrentUser(): any {
    const user = localStorage.getItem('currentUser');
    return user ? JSON.parse(user) : null;
  }
}
