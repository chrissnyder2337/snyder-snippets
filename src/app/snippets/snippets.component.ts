import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Rx';

import { Snippet } from './shared/snippet';
import { SnippetService } from './shared/snippet.service';

@Component({
  selector: 'app-snippets',
  templateUrl: './snippets.component.html',
  styleUrls: ['./snippets.component.css'],
  providers: [
    SnippetService
  ]
})
export class SnippetsComponent implements OnInit {

  snippets: Snippet[];

  constructor(
    private snippetService: SnippetService
  ) { }

  getSnippets(): void {
    this.snippetService.getSnippets().then(snippets => this.snippets = snippets);
  }

  ngOnInit() {
    this.getSnippets();
  }

}
