import { Pipe, PipeTransform } from '@angular/core';
import {Note} from '../note';

@Pipe({
  name: 'noteFilter'
})
export class NoteFilterPipe implements PipeTransform {

  transform(notes: Note[], title: string): any {
    return notes.filter(note => note.title.toLowerCase()
      .indexOf(title.toLowerCase()) !== -1);
  }
}

