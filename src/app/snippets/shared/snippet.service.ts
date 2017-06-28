import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';
import * as firebase from 'firebase';

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

  getNewSnippet(): Snippet {
    return     {
      id: null,
      title: '',
      description: '',
      body: '',
      tags: [],
      timestamp: null
    }
  }

  getSnippets(): FirebaseListObservable<Snippet[]> {
    return this.snippets;
  }

  getSnippet(id: string): FirebaseObjectObservable<Snippet> {
    return this.firebaseDb.object(`/v0/snippets/${id}`);
  }

  addSnippet(snippet: Snippet) {
    const newKey = this.firebaseDb.database.ref('/v0/snippets').push().key;
    snippet.id = newKey;
    snippet.timestamp = firebase.database.ServerValue.TIMESTAMP;
    const update = {};
    update[`/v0/snippets/${newKey}`] = snippet;
    this.firebaseDb.database.ref().update(update);
  }

  updateSnippet(snippet: Snippet) {
    const snippetObservable = this.firebaseDb.object(`/v0/snippets/${snippet.id}`);
    snippetObservable.update(snippet);
  }
}
