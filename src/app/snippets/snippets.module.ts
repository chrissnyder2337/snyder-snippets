import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SnippetsComponent } from './snippets.component';
import { SnippetsRoutingModule } from './snippets.routing';

@NgModule({
  imports: [
    CommonModule,
    SnippetsRoutingModule
  ],
  declarations: [SnippetsComponent]
})
export class SnippetsModule { }
