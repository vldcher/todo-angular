import { Component, OnInit } from '@angular/core';
import {Note} from '../note';
import {NotesService} from '../shared/services/notes.service';

@Component({
  selector: 'app-notes-page',
  templateUrl: './notes-page.component.html',
  styleUrls: ['./notes-page.component.scss']
})
export class NotesPageComponent implements OnInit {

  notes: Note[] = [];

  // currentNoteId = 1;
  // currentNote: Note;

  constructor(private notesService: NotesService) { }

  ngOnInit() {
      this.notesService.getNotes()
          .subscribe((notes: Note[]) => {
              this.notes = notes;
          });
  }

    newNoteAdded(note: Note) {
        this.notes.push(note);
    }

    deleteCurrentNote(note: Note) {
      this.notesService.deleteNote(note)
        .subscribe((note) => {
          this.notes.splice(this.notes.indexOf(note), 1);
      });
    }
  // this.notes.splice(this.notes.indexOf(note), 1);
  markCheck(note: Note) {
    note.isChecked = !note.isChecked;
    // this.notesService.checkOrUnCheckNote(note);
  }
}
