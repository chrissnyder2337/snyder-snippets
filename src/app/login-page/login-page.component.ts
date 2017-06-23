import { Component, OnInit } from '@angular/core';
import { AuthenticationProvider } from '../providers/authentication'
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
  user;
 constructor(public afService: AuthenticationProvider, private router: Router) {}

  login() {
    this.afService.login();
  }

  ngOnInit() {
    this.user = this.afService.getUser;
  }
}
