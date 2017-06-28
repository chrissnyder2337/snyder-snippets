import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import 'rxjs/add/operator/switchMap';
import { MdSnackBar } from '@angular/material';

import { Snippet } from '../shared/snippet';
import { SnippetService } from '../shared/snippet.service';

@Component({
  selector: 'app-snippet-add',
  templateUrl: './snippet-add.component.html',
  styleUrls: ['./snippet-add.component.css'],
  providers: [
    SnippetService
  ]
})
export class SnippetAddComponent implements OnInit {
  @Input() snippet: Snippet;

  constructor(
    private snippetService: SnippetService,
    private route: ActivatedRoute,
    private router: Router,
    private snackbar: MdSnackBar
  ) { }

  ngOnInit() {
    this.snippet = this.snippetService.getNewSnippet();
  }

  /**
   * Clean tags from form input.
   */
  private cleanTags() {
    // Explode tags if saved as a string.
    if (typeof this.snippet.tags === 'string') {
      this.snippet.tags = (<string>this.snippet.tags).split(',');
    }

    // Trim whitespace from tags.
    this.snippet.tags = this.snippet.tags.map(tag => tag.trim());
  }

  addSnippet() {
    // Handle the tags which may be submitted as comma seperated string.
    this.cleanTags();

    this.snippetService.addSnippet(this.snippet);
    this.snackbar.open('Snippet Added', '', {duration: 2000});
    this.router.navigate(['/snippets']);

  }

  cancel() {
    this.router.navigate(['/snippets']);
  }

}
