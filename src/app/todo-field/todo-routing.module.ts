import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {TodoFieldComponent} from './todo-field.component';
import {NotesPageComponent} from '../notes-page/notes-page.component';
import {ArchivedNotesPageComponent} from '../archived-notes-page/archived-notes-page.component';
import {EditNoteComponent} from '../notes-page/edit-note/edit-note.component';

const routes: Routes = [
    { path: 'todo-field', component: TodoFieldComponent, children: [
            {path: 'notes-page', component: NotesPageComponent},
            {path: 'archived-notes-page', component: ArchivedNotesPageComponent},
            {path: 'edit-notes/:id', component: EditNoteComponent}
        ]}
];


@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class TodoRoutingModule {}
