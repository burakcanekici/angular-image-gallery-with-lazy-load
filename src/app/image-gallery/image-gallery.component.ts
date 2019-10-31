import { Component, OnInit, Input } from '@angular/core';
import { ImageGalleryData } from './image-gallery.interface';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';

import { ImageGalleryModalComponent } from './image-gallery-modal/image-gallery-modal.component';


@Component({
  selector: 'be-image-gallery',
  templateUrl: './image-gallery.component.html',
  styleUrls: ['./image-gallery.component.scss']
})
export class ImageGalleryComponent implements OnInit {

  @Input() data: ImageGalleryData[];

  constructor(private http: HttpClient, private modal: MatDialog) { 
    
  }

  ngOnInit() {
    
  }

  showModal(e, id){
    e.preventDefault();
    const dialogRef = this.modal.open(ImageGalleryModalComponent, {
      panelClass: "modal-lg"
    });
    dialogRef.componentInstance.modalImageSrc = 'https://loremflickr.com/640/480?random=' + id;
    dialogRef.componentInstance.modalImageId = id;
  }


  download(e, id){
    e.preventDefault();
    window.alert("download");
  }

}
