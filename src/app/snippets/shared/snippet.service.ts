import { Injectable } from '@angular/core';

import { Snippet } from './snippet';
import { SNIPPETS } from './mock-snippets';

@Injectable()
export class SnippetService {

  constructor() { }

  getSnippets(): Promise<Snippet[]> {
    return new Promise(resolve => resolve(SNIPPETS));
  }

  getSnippet(id: number): Promise<Snippet> {
    return this.getSnippets().then(snippets => snippets.find(snippet => snippet.id === id));
  }
}
