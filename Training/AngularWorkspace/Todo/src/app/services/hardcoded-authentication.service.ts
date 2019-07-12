import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HardcodedAuthenticationService {

  constructor() { }

  authenticate(username, password) {
    // console.log('Before logging in: ' + this.isUserLoggedIn());
    if(username === 'zexl' && password === 'tashanicles') {
      sessionStorage.setItem('authenticatedUser', username);
      // console.log('After logging in: ' + this.isUserLoggedIn())
      return true;
    } else {
      return false;
    }
  }

  isUserLoggedIn() {
    let user = sessionStorage.getItem('authenticatedUser');
    return !(user === null);
  }

  logout() {
    sessionStorage.removeItem('authenticatedUser');
  }

}
