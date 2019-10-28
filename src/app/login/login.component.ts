import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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

  constructor(private router: Router) { }

  ngOnInit() {
  }

  handleLogin() {
    if (this.username === 'olcay' && this.password === 'dummy') {
      this.router.navigate(['welcome']);
      this.invalidLogin = false;
    } else {
      this.invalidLogin = true;
    }
  }

}
