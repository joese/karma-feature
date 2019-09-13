import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { SubOneComponent } from './sub-one.component';

@NgModule({
  declarations: [
    SubOneComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [SubOneComponent]
})
export class SubOneModule { }
