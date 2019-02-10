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
  constructor(private notesService: NotesService) {}

  ngOnInit() {
// TODO: get current note data
  }

  onSubmit(form: NgForm) {
    const {title, text} = form.value;
    const isChecked = false;
    const isArchived = false;

    const note = new Note(title, text, isChecked, isArchived);

    this.notesService.updateNote(note)
      .subscribe((note: Note) => {
        this.noteEdit.emit(note);
      });
  }
}
