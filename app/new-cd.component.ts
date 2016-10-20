import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CD } from './cd.model';
import { Artist } from './artist.model';

@Component({
  selector: 'add-cd',
  template: `
    <form id="addCD">
      <div class="form-group">
        <label>Enter a CD name:</label>
        <input #cdName class="form-control">
      </div>
      <div class="form-group">
        <label>Enter an artist for the CD:</label>
        <select #cdArtist class="form-control">
          <option *ngFor="let currentArtist of childArtistList" value="{{currentArtist.id}}">{{ currentArtist.name }}</option>
        </select>
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
        <input type="number" #cdPrice class="form-control">
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
  @Input() childArtistList: Artist[];
  @Output() newCDSender = new EventEmitter();
  addClicked(name: string, artistId: number, genre: string, price: number) {
    if (name && artistId && genre && price) {
      var artistIdNum: number = Number(artistId);
      var priceNum: number = Number(price);
      var newCDToAdd: CD = new CD(name, artistIdNum, genre, priceNum);
      this.newCDSender.emit(newCDToAdd);
    } else {
      alert ("Please fill out all fields.");
    }
  }
}
