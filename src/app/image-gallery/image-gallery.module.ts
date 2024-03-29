import { NgModule, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { ImageGalleryComponent } from './image-gallery.component';
import { DeferLoadModule } from '@trademe/ng-defer-load';
import {MatGridListModule} from '@angular/material/grid-list';
import { HttpClientModule } from '@angular/common/http';
import { MatDialogModule } from '@angular/material/dialog';

import { ImageGalleryModalComponent } from './image-gallery-modal/image-gallery-modal.component';


@NgModule({
  declarations: [
    ImageGalleryComponent,
    ImageGalleryModalComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    DeferLoadModule,
    MatGridListModule,
    HttpClientModule,
    MatDialogModule
  ],
  exports: [
    ImageGalleryComponent,
    ImageGalleryModalComponent
  ],
  entryComponents: [
    ImageGalleryModalComponent
  ]
})
export class ImageGalleryModule {}
