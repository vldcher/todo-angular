import {Component, EventEmitter, Input, Output, OnInit} from '@angular/core';
import {Note} from '../../note';
import {NotesService} from '../../shared/services/notes.service';
import {NgForm} from '@angular/forms';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {switchMap} from 'rxjs/operators';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-edit-note',
  templateUrl: './edit-note.component.html',
  styleUrls: ['./edit-note.component.scss']
})
export class EditNoteComponent implements OnInit {
  @Output() noteEdit = new EventEmitter<Note>();
  note$: Observable<Note>;
  constructor(private notesService: NotesService, private  route: ActivatedRoute) {}

  ngOnInit() {
    this.note$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
        this.notesService.getNote(params.get('id')))
    );
  }

  onSubmit(form: NgForm) {
    const {title, text} = form.value;
    const isChecked = false;
    const isArchived = false;
    const note = new Note(title, text, isChecked, isArchived);

    this.notesService.updateNote(note.id, note)
      .subscribe((res: Note) => {
        this.noteEdit.emit(res);
      });
  }
}
