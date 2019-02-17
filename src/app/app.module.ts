import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { SidebarComponent } from './sidebar/sidebar.component';
import { TodoFieldComponent } from './todo-field/todo-field.component';
import { AddNoteComponent } from './add-note/add-note.component';
import { NotesPageComponent } from './notes-page/notes-page.component';
import { SharedModule } from './shared/shared.module';
import { NotesService } from './shared/services/notes.service';
import { ArchivedNotesPageComponent } from './archived-notes-page/archived-notes-page.component';
import { TodoModule} from './todo-field/todo.module';
import { AppRoutingModule } from './app-routing.module';
import { EditNoteComponent } from './edit-note/edit-note.component';
import { NoteFilterPipe } from './shared/note-filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    TodoFieldComponent,
    AddNoteComponent,
    NotesPageComponent,
    ArchivedNotesPageComponent,
    EditNoteComponent,
    NoteFilterPipe
  ],
  imports: [
      BrowserModule,
      AppRoutingModule,
      SharedModule,
      HttpClientModule,
      TodoModule
  ],
  providers: [NotesService, NoteFilterPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
