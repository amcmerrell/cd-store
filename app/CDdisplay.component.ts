import { CD } from './cd.model';
import { Artist } from './artist.model';
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'displayCD',
  template: `
    <div class="row form-group">
      <div class="col-md-3">
      <label>Sort by Genre</label>
        <select class="form-control"(change)="onGenreChange($event.target.value)">
          <option value="all" selected="selected">Show All</option>
          <option value="Rock">Rock</option>
          <option value="HipHop">HipHop</option>
        </select>
      </div>
      <div class="col-md-3">
        <label>Sort by Price</label>
        <select class="form-control"(change)="onPriceChange($event.target.value)">
          <option value="all" selected="selected">Show All CD's</option>
          <option value="low">Show Low Price CD's</option>
          <option value="med">Show Medium Price CD's</option>
          <option value="high">Show High Price CD's</option>
        </select>
      </div>
      <div class="col-md-3">
        <label>Sort by Artist</label>
        <select class="form-control"(change)="onArtistIdChange($event.target.value)">
          <option value="-1" selected="selected">Show All CD's</option>
          <option *ngFor="let currentArtist of childArtistList" value='{{currentArtist.id}}'>{{ currentArtist.name }}</option>
        </select>
      </div>
    </div>
    <div class="row">
      <div class="col-md-3" *ngFor="let currentCD of childCDList | sortGenre: selectedGenre | sortPrice: priceRange | sortArtist: selectedArtistId">
        <div *ngFor="let currentArtist of childArtistList">
          <div *ngIf="currentCD.artistId == currentArtist.id">
            <h3>{{ currentCD.name }}</h3>
            <h4>Artist: {{ childArtistList[currentCD.artistId].name }}</h4>
            <h4>Genre: {{ currentCD.genre }}</h4>
            <h5>Price: \${{ currentCD.price }}</h5>
          </div>
        </div>
      </div>
    </div>
  `
})

export class CDDisplayComponent {
  @Input() childCDList: CD[];
  @Input() childArtistList: Artist[];
  public selectedGenre: string;
  public priceRange: string;
  public selectedArtistId: number = (-1);
  onGenreChange(optionFromMenu) {
    this.selectedGenre = optionFromMenu;
  }
  onPriceChange(optionFromMenu) {
    this.priceRange = optionFromMenu;
  }
  onArtistIdChange(optionFromMenu) {
    this.selectedArtistId = Number(optionFromMenu);
    console.log(this.selectedArtistId);
  }
}
