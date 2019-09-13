import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SubTwoComponent } from './sub-two.component';

@NgModule({
  declarations: [SubTwoComponent],
  imports: [
    BrowserModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [SubTwoComponent]
})
export class SubTwoModule { }
