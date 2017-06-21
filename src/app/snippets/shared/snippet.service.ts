import { Injectable } from '@angular/core';

import { Snippet } from './snippet';
import { SNIPPETS } from './mock-snippets';

@Injectable()
export class SnippetService {

  constructor() { }

  getSnippets(): Promise<Snippet[]> {
    return new Promise(resolve => resolve(SNIPPETS));
  }
}
