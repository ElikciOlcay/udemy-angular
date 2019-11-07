import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HardcodedAuthenticationService {

  constructor() { }

  auth(username, password) {
    // console.log(this.isUserLoggedIn());
    if (username === 'olcay' && password === 'dummy') {
      sessionStorage.setItem('authUser', username);
      // console.log(this.isUserLoggedIn());
      return true;
    }
    return false;
  }

  logout() {
    sessionStorage.removeItem('authUser');
  }

  isUserLoggedIn() {
    // tslint:disable-next-line:prefer-const
    let user = sessionStorage.getItem('authUser');
    return !(user === null);
  }
}
