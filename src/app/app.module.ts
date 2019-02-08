import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { SidebarComponent } from './sidebar/sidebar.component';
import { TodoFieldComponent } from './todo-field/todo-field.component';
import { AddNoteComponent } from './notes-page/add-note/add-note.component';
import { NotesPageComponent } from './notes-page/notes-page.component';
import { SharedModule } from './shared/shared.module';
import { NotesService } from './shared/services/notes.service';
import { ArchivedNotesPageComponent } from './archived-notes-page/archived-notes-page.component';
import {TodoModule} from './todo-field/todo.module';
import {AppRoutingModule} from './app-routing.module';
import { EditNoteComponent } from './notes-page/edit-note/edit-note.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    TodoFieldComponent,
    AddNoteComponent,
    NotesPageComponent,
    ArchivedNotesPageComponent,
    EditNoteComponent
  ],
  imports: [
      BrowserModule,
      AppRoutingModule,
      SharedModule,
      HttpClientModule,
      TodoModule
  ],
  providers: [NotesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
