import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';


import { Snippet } from './snippet';
import { SNIPPETS } from './mock-snippets';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class SnippetService {
  snippets: FirebaseListObservable<Snippet[]>

  constructor(
    private firebaseDb: AngularFireDatabase
  ) {
    this.snippets = this.firebaseDb.list('/v0/snippets');
  }

  getSnippets(): FirebaseListObservable<Snippet[]> {
    return this.snippets;
  }

  getSnippet(id: number): FirebaseObjectObservable<Snippet> {
    return this.firebaseDb.object(`/v0/snippets/${id}`);
  }
}
