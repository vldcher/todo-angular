import { Component, OnInit } from '@angular/core';

import {Note} from '../note';
import {NotesService} from '../shared/services/notes.service';

@Component({
  selector: 'app-archived-notes-page',
  templateUrl: './archived-notes-page.component.html',
  styleUrls: ['./archived-notes-page.component.scss']
})
export class ArchivedNotesPageComponent implements OnInit {

  notes: Note[] = [];

  constructor(private notesService: NotesService) {
  }

  ngOnInit() {
    this.notesService.getNotes()
      .subscribe((notes: Note[]) => {
        this.notes = notes;
      });
  }

  unArchiveCurrentNote(note: Note) {
    this.notesService.updateNote(note.id, {isArchived: !note.isArchived})
      .subscribe((note: Note) => {
        note.isArchived = !note.isArchived;
      });
  }
}
