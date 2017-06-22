import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import 'rxjs/add/operator/switchMap';

import { Snippet } from '../shared/snippet';
import { SnippetService } from '../shared/snippet.service';

@Component({
  selector: 'app-snippet-edit',
  templateUrl: './snippet-edit.component.html',
  styleUrls: ['./snippet-edit.component.css'],
  providers: [
    SnippetService
  ]
})
export class SnippetEditComponent implements OnInit {
  @Input() snippet: Snippet;

  constructor(
    private snippetService: SnippetService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.params.switchMap((params: Params) => this.snippetService.getSnippet(+params['id']))
      .subscribe(snippet => this.snippet = snippet);
  }

}
