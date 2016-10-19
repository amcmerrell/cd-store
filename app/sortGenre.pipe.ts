import { Pipe, PipeTransform } from '@angular/core';
import { CD } from './cd.model';

@Pipe({
  name: "sortGenre",
  pure: false
})
export class SortGenrePipe implements PipeTransform {
  transform(input: CD[], desiredGenre){
    var output: CD[] = [];
    if(desiredGenre === "Rock"){
      for (var i=0; i<input.length; i++) {
        if (input[i].genre === "Rock") {
          output.push(input[i]);
        }
      }
      return output;
    } else if (desiredGenre === "HipHop") {
      for (var i=0; i<input.length; i++) {
        if (input[i].genre === "HipHop") {
          output.push(input[i]);
        }
      }
      return output;
    } else {
      return input;
    }
  }
}
