import { Component } from '@angular/core';
import { CD } from './cd.model';
import { Artist } from './artist.model';

@Component({
  selector: 'my-app',
  template: `
  <div id="background-image">
    <div id="color-filter" class="container-fluid">
      <div class="container">
        <h1>CD Store</h1>
        <displayCD
          [childArtistList]="MasterArtistList"
          [childCDList]="MasterCDList"
        ></displayCD>
        <div class="row">
          <div class="col-md-6">
            <add-cd
              [childArtistList]="MasterArtistList"
              (newCDSender)="addCD($event)"
            ></add-cd>
          </div>
          <div class="col-md-6">
            <add-artist
              (newArtistSender)="addArtist($event)"
            ></add-artist>
          </div>
        </div>
      </div>
    </div>
  </div>
  `
})

export class AppComponent {
  public MasterCDList: CD[] = [];

  public MasterArtistList: Artist[] = [];
  addArtist(newArtistfromChild: Artist) {
    newArtistfromChild.id = this.MasterArtistList.length;
    this.MasterArtistList.push(newArtistfromChild);
  }

  addCD(newCDfromChild: CD) {
    this.MasterCDList.push(newCDfromChild);
  }

}
