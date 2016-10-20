import { Component, Output, EventEmitter } from '@angular/core';
import { Artist } from './artist.model';

@Component({
  selector: 'add-artist',
  template: `
  <form id="addArtist">
    <div class="form-group">
      <label>Enter an artist name:</label>
      <input #artistName class="form-control">
    </div>
    <button class="btn btn-primary" (click)="
      addArtistClicked(artistName.value);
      artistName.value='';
    ">
    Create Arist</button>
  </form>
  `
})

export class AddArtistComponent {
  @Output() newArtistSender = new EventEmitter();
  addArtistClicked(artistName: string) {
    if(artistName) {
      var newArtistToAdd: Artist = new Artist(artistName);
      this.newArtistSender.emit(newArtistToAdd);
    } else {
      alert("Please fill out all fields.")
    }
  }
}
