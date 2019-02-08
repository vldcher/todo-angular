import { Component, EventEmitter, Output } from '@angular/core';
import { Note } from '../../note';
import { NgForm } from '@angular/forms';
import { NotesService } from '../../shared/services/notes.service';

@Component({
  selector: 'app-note',
  templateUrl: './add-note.component.html',
  styleUrls: ['./add-note.component.scss']
})
export class AddNoteComponent {
    completed = false;
    @Output() noteAdded = new EventEmitter<Note>();

  constructor(private notesService: NotesService) { }
    onSubmit(form: NgForm) {
        const {title, text} = form.value;

        const note = new Note(title, text);

        this.notesService.addNote(note)
            .subscribe((note: Note) => {
                form.reset();
                this.noteAdded.emit(note);
            });
    }

}
