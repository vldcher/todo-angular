import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Note} from '../note';
import {NotesService} from '../shared/services/notes.service';
import {NoteFilterPipe} from '../shared/note-filter.pipe';

@Component({
  selector: 'app-notes-page',
  templateUrl: './notes-page.component.html',
  styleUrls: ['./notes-page.component.scss']
})
export class NotesPageComponent implements OnInit {
  @Input() notes: Note[] = [];
  @Output() noteUpdated = new EventEmitter<Note>();

  title = '';

  constructor(private notesService: NotesService) {
  }

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
        console.log('deleted');
      });
  }

  checkCurrentNote(note: Note) {
    this.notesService.updateNote(note.id, {isChecked: !note.isChecked})
      .subscribe(({isChecked}) => {
        note.isChecked = isChecked;
      });
  }

  archiveCurrentNote(note: Note) {
    this.notesService.updateNote(note.id, {isArchived: !note.isArchived})
      .subscribe((note: Note) => {
        note.isArchived = !note.isArchived;
      });
  }
}
