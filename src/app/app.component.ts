import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'my-app';
  currentRoute = '';

  constructor(location: Location, router: Router) {
    router.events.subscribe((val) => {
      if(location.path() != ''){
        this.currentRoute = location.path().split('/')[1];
      } else {
        this.currentRoute = 'home';
      }
    });
    console.log(this.currentRoute);
  }

  getActiveClass() {
    console.log(this.currentRoute);
    return this.currentRoute;
  }
}
