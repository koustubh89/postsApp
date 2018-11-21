import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DomSanitizer, SafeResourceUrl, SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.scss']
})
export class PhotosComponent implements OnInit {

  testarr:any = [];
  constructor(private http: HttpClient,
    private _sanitizer: DomSanitizer) { }

  ngOnInit() {
    this.getPhotos();
  }

  getConfig() {
    return this.http.get('https://jsonplaceholder.typicode.com/photos');
  }

  getPhotos() {
    this.getConfig()
    .subscribe((data) => this.testarr = data);
  }

  getBackground(image) {
    return this._sanitizer.bypassSecurityTrustStyle(`linear-gradient(rgba(29, 29, 29, 0), rgba(16, 16, 23, 0.5)), url(${image})`);
  }
}
