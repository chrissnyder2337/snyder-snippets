import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { environment } from '../environments/environment';
import 'hammerjs';

import {
  MdToolbarModule,
  MdIconModule,
  MdButtonModule,
  MdDialogModule,
  MdTooltipModule
} from '@angular/material';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirebaseAuth } from './shared/firebase-auth'
import { LoginPageComponent } from './login-page/login-page.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    MdToolbarModule,
    MdIconModule,
    MdButtonModule,
    MdDialogModule,
    MdTooltipModule
  ],
  providers: [FirebaseAuth],
  bootstrap: [AppComponent]
})
export class AppModule { }
