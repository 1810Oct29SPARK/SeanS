import { Component, OnInit } from '@angular/core';
import { HardcodedAuthenticationService } from 'src/app/services/hardcoded-authentication.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  // isUserLoggedIn: boolean = false;

  constructor(
    private hardAuthService: HardcodedAuthenticationService
  ) { }

  ngOnInit() {
    // this.isUserLoggedIn = this.hardAuthService.isUserLoggedIn();
  }

}
