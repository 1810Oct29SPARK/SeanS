import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HardcodedAuthenticationService } from 'src/app/services/hardcoded-authentication.service';

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

  constructor(
    private router: Router,
    private hardService: HardcodedAuthenticationService
  ) { }

  ngOnInit() {
  }

  handleLogin() {
    // if(this.username === 'zexl' && this.password === 'tashanicles') {
    if(this.hardService.authenticate(this.username, this.password)) {
      this.invalidLogin = false;
      this.router.navigate(['welcome', this.username]);
      console.log(this.username + " is logged in!");
    } else {
      this.invalidLogin = true;
    }
  }

}