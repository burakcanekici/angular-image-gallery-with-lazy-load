import { Component, OnInit } from "@angular/core";
import { MatDialogRef } from "@angular/material/dialog";

@Component({
  selector: "be-image-gallery-modal",
  templateUrl: "./image-gallery-modal.component.html",
  styleUrls: ["./image-gallery-modal.component.scss"]
})
export class ImageGalleryModalComponent implements OnInit {
  public modalImageSrc: string;
  public modalImageId: number;

  constructor(private modalRef: MatDialogRef<ImageGalleryModalComponent>) {}

  ngOnInit() {
    debugger;
  }

  closeModal() {
    this.modalRef.close();
  }

  backward() {
    if (this.modalImageId > 1) {
      this.modalImageId--;
      this.modalImageSrc =
        "https://loremflickr.com/640/480?random=" + this.modalImageId;
    }
  }

  forward() {
    if (this.modalImageId < 50) {
      this.modalImageId++;
      this.modalImageSrc =
        "https://loremflickr.com/640/480?random=" + this.modalImageId;
    }
  }
}
