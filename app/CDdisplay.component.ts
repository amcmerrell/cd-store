import { CD } from './cd.model';
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'displayCD',
  template: `
    <div class="row form-group">
      <div class="col-md-3">
        <select class="form-control"(change)="onChange($event.target.value)">
          <option value="all" selected="selected">Show All</option>
          <option value="Rock">Rock</option>
          <option value="HipHop">HipHop</option>
        </select>
      </div>
    </div>
    <div class="row">
      <div class="col-md-3" *ngFor="let currentCD of childCDList | sortGenre: selectedGenre">
        <h3>{{ currentCD.name }}</h3>
        <h4>Artist: {{ currentCD.artist }}</h4>
        <h4>Genre: {{ currentCD.genre }}</h4>
        <h5>Price: \${{ currentCD.price }}</h5>
      </div>
    </div>
  `
})

export class CDDisplayComponent {
  @Input() childCDList: CD[];
  public selectedGenre: string;
    onChange(optionFromMenu) {
    this.selectedGenre = optionFromMenu;
    console.log(this.selectedGenre);
  }
}
