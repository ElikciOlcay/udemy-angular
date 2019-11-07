import { Component, OnInit } from '@angular/core';
import { HardcodedAuthenticationService } from '../service/hardcoded-authentication.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  // tslint:disable-next-line:no-inferrable-types
  // isUserLoggedIn: boolean = false;

  constructor(
    private hardcodedauthservice: HardcodedAuthenticationService
  ) { }

  ngOnInit() {
    // this.isUserLoggedIn = this.hardcodedauthservice.isUserLoggedIn();
  }

}
