import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username = 'zexl';
  password = 'tashanicles';

  errorMessage = 'Invalid Login!'
  invalidLogin = false;

  constructor() { }

  ngOnInit() {
  }

  handleLogin() {
    if(this.username === 'zexl' && this.password === 'tashanicles') {
      this.invalidLogin = false;
      console.log(this.username + " is logged in!");
    } else {
      this.invalidLogin = true;
    }
  }

}
