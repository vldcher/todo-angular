import { Pipe, PipeTransform } from '@angular/core';
import {Note} from '../note';

@Pipe({
  name: 'noteFilter'
})
export class NoteFilterPipe implements PipeTransform {

  transform(notes: Note[], args: any[]): any {
    // return notes.filter(note => note.title.toLowerCase()
    //   .indexOf(args[0].toLowerCase()) !== -1);
    // TODO: check why title undefined
    // notes.filter((el) =>
    //   el.title.toLowerCase().indexOf(args[0].toLowerCase()) > -1);
  }
}

