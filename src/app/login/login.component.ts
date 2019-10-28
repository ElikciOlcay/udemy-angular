import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username = 'olcay';
  password = '';
  errorMessage = 'invalid';
  invalidLogin = false;

  constructor() { }

  ngOnInit() {
  }

  handleLogin() {
    if (this.username === 'olcay' && this.password === 'dummy') {
      this.invalidLogin = false;
    } else {
      this.invalidLogin = true;
    }
  }

}
