import {Injectable} from '@angular/core';

import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {BaseApi} from '../base-api';
import {Note} from '../../note';

@Injectable()
export class NotesService extends BaseApi {
  constructor(public http: HttpClient) {
    super(http);
  }

  addNote(note: Note): Observable<Note> {
    return this.post('notes', note);
  }

  getNotes(): Observable<Note[]> {
    return this.get('notes');
  }

  getNote(id: string): Observable<Note> {
    return this.get(`notes/${id}`);
  }

  updateNote(id: number, update: Partial<Note>): Observable<Note> {
    return this.put(`notes/${id}`, update);
  }

  deleteNote(note: Note): Observable<Note> {
    return this.delete(`notes/${note.id}`);
  }
}
