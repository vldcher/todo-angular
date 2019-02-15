import {Component, EventEmitter, Input, Output, OnInit} from '@angular/core';
import {Note} from '../../note';
import {NotesService} from '../../shared/services/notes.service';
import {NgForm} from '@angular/forms';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {switchMap, tap} from 'rxjs/operators';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-edit-note',
  templateUrl: './edit-note.component.html',
  styleUrls: ['./edit-note.component.scss']
})
export class EditNoteComponent implements OnInit {
  @Output() noteEdit = new EventEmitter<Note>();
  note$: Observable<Note>;
  note: Note;
  noteId: number;
    noteIsChecked: boolean;
    noteIsArchived: boolean;

  constructor(private notesService: NotesService, private  route: ActivatedRoute) {}

  ngOnInit() {
    this.note$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
        this.notesService.getNote(params.get('id'))), tap(note => { this.noteId = note.id;
        this.noteIsChecked = note.isChecked;
        this.noteIsArchived = note.isArchived})
    );
  }
  //
  // getNoteValues(note: Note) {
  //     this.notesService.updateNote(note.id, {isChecked: !note.isChecked})
  //         .subscribe(({isChecked}) => {
  //             note.isChecked = isChecked;
  //         });
  // }

  onSubmit(form: NgForm) {
    const {title, text} = form.value;
    const note = new Note(title, text, this.noteIsChecked, this.noteIsArchived);

    this.notesService.updateNote(this.noteId, note)
      .subscribe((res: Note) => {
        this.noteEdit.emit(res);
      });
  }
}
