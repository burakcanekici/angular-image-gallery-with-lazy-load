import { Component } from "@angular/core";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  name = "Angular";

  galleryImages = [];

  //https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_image_grid
  //https://www.w3schools.com/howto/howto_js_image_grid.asp

  constructor() {
    for (let i = 0; i < 50; i++) {
      const url = "https://loremflickr.com/640/480?random=" + (i + 1);
      this.galleryImages[i] = {
        id: i+1,
        small: url,
        medium: url,
        big: url,
        url:
          "http://www.cartoonbucket.com/wp-content/uploads/2015/05/Pikachu-On-Pokemon-Ball-600x526.jpg",
        show: false
      };
    }
  }
}
