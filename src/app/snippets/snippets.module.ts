import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MdIconModule, MdButtonModule, MdCardModule, MdToolbarModule } from '@angular/material';

import { SnippetsComponent } from './snippets.component';
import { SnippetsRoutingModule } from './snippets.routing';
import { SnippetDetailComponent } from './snippet-detail/snippet-detail.component';

@NgModule({
  imports: [
    CommonModule,
    SnippetsRoutingModule,
    MdIconModule,
    MdButtonModule,
    MdCardModule,
    MdToolbarModule
  ],
  declarations: [SnippetsComponent, SnippetDetailComponent]
})
export class SnippetsModule { }
