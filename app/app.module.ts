import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import { CDDisplayComponent } from './CDdisplay.component';
import { SortGenrePipe } from './sortGenre.pipe';
import { FormsModule }   from '@angular/forms';
import { AddCDComponent } from './new-cd.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule
  ],
  declarations: [
    AppComponent,
    CDDisplayComponent,
    SortGenrePipe,
    AddCDComponent
  ],
  bootstrap: [ AppComponent ]
})

export class AppModule { }
