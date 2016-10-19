import { Component, Output, EventEmitter } from '@angular/core';
import { CD } from './cd.model';

@Component({
  selector: 'add-cd',
  template: `
    <form>
      <div class="form-group">
        <label>Enter a CD name:</label>
        <input #cdName class="form-control">
      </div>
      <div class="form-group">
        <label>Enter an artist for the CD:</label>
        <input #cdArtist class="form-control">
      </div>
      <div class="form-group">
        <label>Enter a genre for the CD:</label>
        <select #cdGenre class="form-control">
          <option value="Rock">Rock</option>
          <option value="HipHop">HipHop</option>
          <option value="Pop">Pop</option>
          <option value="R&amp;B">R&amp;B</option>
        </select>
      </div>
      <div class="form-group">
        <label>Enter a price for the CD:</label>
        <input #cdPrice class="form-control">
      </div>
      <button class="btn btn-primary" (click)="
        addClicked(cdName.value, cdArtist.value, cdGenre.value, cdPrice.value);
        cdName.value='';
        cdArtist.value='';
        cdGenre.value='';
        cdPrice.value='';
      ">Create CD</button>
    </form>
  `
})

export class AddCDComponent {
  @Output() newCDSender = new EventEmitter();
  addClicked(name: string, artist: string, genre: string, price: number) {
    var newCDToAdd: CD = new CD(name, artist, genre, price);
    this.newCDSender.emit(newCDToAdd);
  }
}
