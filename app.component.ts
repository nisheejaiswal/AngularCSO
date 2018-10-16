import { Component, OnInit } from '@angular/core';
import {Http, Response, Headers} from '@angular/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private http: Http) { }
  
  images = [];

  fetchData = function() {
    this.http.get("http://localhost:5557/images").subscribe(
      (res: Response) => {
        this.images = res.json();
      }
    )
  }

  confirmationString:string = "New image has been added";
  isAdded: boolean = false;
  imageObj:object = {};

  addNewImage = function(image) {
    this.imageObj = {
      "img_id": image.img_id,
      "img_name": image.img_name
    }

    this.http.post("http://localhost:5557/images/", this.imageObj).subscribe((res:Response) => {
      this.isAdded = true;
    })
  }

  ngOnInit() {
    this.fetchData();
  }

  refresh(): void {
    window.location.reload();
}


}