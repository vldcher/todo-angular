import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Note} from '../note';
import {NotesService} from '../shared/services/notes.service';
import {NoteFilterPipe} from '../shared/note-filter.pipe';

@Component({
  selector: 'app-notes-page',
  // providers: [NoteFilterPipe],
  templateUrl: './notes-page.component.html',
  styleUrls: ['./notes-page.component.scss']
})
export class NotesPageComponent implements OnInit {
  @Input() notes: Note[] = [];
  @Output() noteUpdated = new EventEmitter<Note>();

  // notes: Note[] = [];
  title = '';

  currentNoteId = 1;
  currentNote: Note;

  constructor(private notesService: NotesService) {
  }

  ngOnInit() {
    this.notesService.getNotes()
      .subscribe((notes: Note[]) => {
        this.notes = notes;
      });
    this.noteChanges();
  }

  noteChanges() {
    this.currentNote = this.notes
      .find(n => n.id === +this.currentNoteId);
  }

  newNoteAdded(note: Note) {
    this.notes.push(note);
  }

  deleteCurrentNote(note: Note) {
    this.notesService.deleteNote(note)
      .subscribe((note) => {
        this.notes.splice(this.notes.indexOf(note), 1);
        // TODO: fix problems with indexes after deleting
        console.log('deleted');
      });
  }

  checkCurrentNote(note: Note) {
    this.notesService.checkNote(note)
      .subscribe(() => {
        note.isChecked = !note.isChecked;
      });
  }

  archivateCurrentNote(note: Note) {

    // const note = new Note(this.title, this.text, this.isChecked, this.isArchived,
    //   +this.currentNoteId);

    this.notesService.archiveNote(note)
      .subscribe((note: Note) => {
        this.noteUpdated.emit(note);
        note.isArchived = !note.isArchived;
      });
  }
}
