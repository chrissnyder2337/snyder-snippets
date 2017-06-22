import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MdIconModule, MdButtonModule, MdCardModule, MdToolbarModule, MdInputModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';

import { SnippetsComponent } from './snippets.component';
import { SnippetsRoutingModule } from './snippets.routing';
import { SnippetDetailComponent } from './snippet-detail/snippet-detail.component';
import { SnippetEditComponent } from './snippet-edit/snippet-edit.component';

@NgModule({
  imports: [
    CommonModule,
    SnippetsRoutingModule,
    MdIconModule,
    MdButtonModule,
    MdCardModule,
    MdToolbarModule,
    MdInputModule,
    FormsModule,
    FlexLayoutModule
  ],
  declarations: [SnippetsComponent, SnippetDetailComponent, SnippetEditComponent]
})
export class SnippetsModule { }
