import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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

  snippets: Observable<Snippet[]>;

  constructor(
    private snippetService: SnippetService,
    private router: Router
  ) { }

  getSnippets(): void {
    this.snippets = this.snippetService.getSnippets();
  }

  goToSnippet(snippet: Snippet): void {
    this.router.navigate(['/snippets', snippet.id]);
  }

  ngOnInit() {
    this.getSnippets();
  }

}
