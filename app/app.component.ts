import { Component } from '@angular/core';
import { CD } from './cd.model';

@Component({
  selector: 'my-app',
  template: `
  <div class="container">
    <h1>CD Store</h1>
    <displayCD
      [childCDList]="MasterCDList"
    ></displayCD>
    <add-cd
      (newCDSender)="addCD($event)"
    ></add-cd>
  </div>
  `
})

export class AppComponent {
  public MasterCDList: CD[] = [
    new CD("Junta", "Phish", "Rock", 15),
    new CD("Lawn Boy", "Phish", "Rock", 13),
    new CD("Rift", "Phish", "Rock", 20),
    new CD("Farmhouse", "Phish", "Rock", 10),
    new CD("Aoxomoxoa", "Grateful Dead", "Rock", 16),
    new CD("Low-End Theory", "A Tribe Called Quest", "HipHop", 14),
    new CD("Licensed to Ill", "Beastie Boys", "HipHop", 12),
    new CD("Workingman's Dead", "Grateful Dead", "Rock", 14)
  ];

  addCD(newCDfromChild: CD) {
    this.MasterCDList.push(newCDfromChild);
  }
}
