import { Component, OnInit } from '@angular/core';
import { AuthenticationProvider } from '../providers/authentication'
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent {

 constructor(public afService: AuthenticationProvider, private router: Router) {}

  login() {
    this.afService.login();
  }

}
