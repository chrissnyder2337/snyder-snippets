import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import {
  MdSnackBarModule,
  MdIconModule,
  MdButtonModule,
  MdCardModule,
  MdToolbarModule,
  MdInputModule,
  MdChipsModule,
  MdProgressSpinnerModule
  } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MarkdownModule } from 'angular2-markdown';

import { SnippetsComponent } from './snippets.component';
import { SnippetsRoutingModule } from './snippets.routing';
import { SnippetDetailComponent } from './snippet-detail/snippet-detail.component';
import { SnippetEditComponent } from './snippet-edit/snippet-edit.component';
import { SnippetAddComponent } from './snippet-add/snippet-add.component';

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    SnippetsRoutingModule,
    MdIconModule,
    MdButtonModule,
    MdCardModule,
    MdToolbarModule,
    MdInputModule,
    MdSnackBarModule,
    MdChipsModule,
    MdProgressSpinnerModule,
    FlexLayoutModule,
    MarkdownModule.forRoot()
  ],
  declarations: [SnippetsComponent, SnippetDetailComponent, SnippetEditComponent, SnippetAddComponent]
})
export class SnippetsModule { }
