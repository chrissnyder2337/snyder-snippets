import { Component, OnInit } from '@angular/core';
import { FirebaseAuth } from '../shared/firebase-auth'
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-login-page',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user;
 constructor(public afService: FirebaseAuth, private router: Router) {}

  login() {
    this.afService.login();
  }

  ngOnInit() {
    this.user = this.afService.getUser;
  }
}
