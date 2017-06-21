import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SnippetsComponent } from './snippets.component';
import { SnippetsRoutingModule } from './snippets.routing';
import { SnippetDetailComponent } from './snippet-detail/snippet-detail.component';

@NgModule({
  imports: [
    CommonModule,
    SnippetsRoutingModule
  ],
  declarations: [SnippetsComponent, SnippetDetailComponent]
})
export class SnippetsModule { }
