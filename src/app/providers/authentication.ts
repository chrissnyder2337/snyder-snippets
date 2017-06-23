import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AuthenticationProvider {

  user: Observable<firebase.User>;
  constructor(
    public firebase: AngularFireAuth
  ) { }

  login() {
    this.firebase.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
  }

  logout() {
    this.firebase.auth.signOut();
  }

  // TODO: Might want to provide this state in a differnt way
  getUser() {
    return this.user;
  }

}
