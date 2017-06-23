import { Component } from '@angular/core';
import { MdDialog } from '@angular/material';
import { LoginPageComponent } from './login-page/login-page.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Snyder Snippets';

  constructor(
    public dialog: MdDialog
  ) { }

  openLoginDialog() {
    this.dialog.open(LoginPageComponent);
  }
}
