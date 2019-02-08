import {Component, EventEmitter, Input, Output, OnInit} from '@angular/core';
import {Note} from '../../note';
import {NotesService} from '../../shared/services/notes.service';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-edit-note',
  templateUrl: './edit-note.component.html',
  styleUrls: ['./edit-note.component.scss']
})
export class EditNoteComponent implements OnInit {

  @Input() notes: Note[] = [];
  @Output() noteEdit = new EventEmitter<Note>();

    currentNoteId = 1;
    currentNote: Note;

  constructor(private notesService: NotesService) {}

  ngOnInit() {

  }

    // onSubmit(form: NgForm) {
    //     const {title, text} = form.value;
    //
    //     const note = new Note(title, text, +this.currentNoteId);
    //
    //     this.notesService.updateNote(note)
    //         .subscribe((note: Note) => {
    //             this.noteEdit.emit(note);
    //         });
    // }
}
