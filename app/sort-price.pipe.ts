import { Pipe, PipeTransform } from '@angular/core';
import { CD } from './cd.model';

@Pipe({
  name: "sortPrice",
  pure: false
})
export class SortPricePipe implements PipeTransform {
  transform(input: CD[], priceRange) {
    var output: CD[] = [];
    if (priceRange === "low") {
      for (let i = 0; i < input.length; i++) {
        if (input[i].price < 10) {
          output.push(input[i]);
        }
      }
      return output;
    } else if (priceRange === "med") {
      for (let i = 0; i < input.length; i++) {
        if (input[i].price >= 10 && input[i].price < 15) {
          output.push(input[i]);
        }
      }
      return output;
    } else if (priceRange === "high") {
      for (let i = 0; i < input.length; i++) {
        if (input[i].price >= 15) {
          output.push(input[i]);
        }
      }
      return output;
    } else {
      return input;
    }
  }
}
