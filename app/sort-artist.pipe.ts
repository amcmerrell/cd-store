import { Pipe, PipeTransform } from '@angular/core';
import { CD } from './cd.model';

@Pipe({
  name: 'sortArtist',
  pure: false
})
export class SortArtistPipe implements PipeTransform {
  transform(input: CD[], selectedArtistId: number) {
    var output: CD[] = [];
    if (selectedArtistId >= 0) {
      for (let i = 0; i < input.length; i++) {
        if (input[i].artistId === selectedArtistId) {
          output.push(input[i]);
        }
      }
      return output;
    } else if (selectedArtistId < 0) {
      return input;
    }
  }
}
