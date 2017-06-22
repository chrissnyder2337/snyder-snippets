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
  snippetLoaded = false

  constructor(
    private snippetService: SnippetService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.params.switchMap((params: Params) => this.snippetService.getSnippet(+params['id']))
      .subscribe(snippet => {this.snippet = snippet; this.snippetLoaded = true; });
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

  saveSnippet() {
    // TODO: do stuff on submitted
    console.log("Submitted");

    // Handle the tags which may be submitted as comma seperated string.
    this.cleanTags();

    this.snippetService.updateSnippet(this.snippet);
    console.log(this.snippet);
  }
}
