import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { ImageGalleryModule } from './image-gallery/image-gallery.module';
import { MatCardModule } from '@angular/material/card';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  imports:      [ BrowserModule, FormsModule, ImageGalleryModule, MatCardModule, BrowserAnimationsModule ],
  declarations: [ AppComponent, HelloComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
