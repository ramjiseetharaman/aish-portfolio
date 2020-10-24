import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor() {}

  ngOnInit() {
    // Initialize connection to firebase backend
    firebase.initializeApp({
      apiKey: 'AIzaSyDy9C0eR93htHG1scVgElky8akv3-HNQrg',
      authDomain: 'aishu-portfolio.firebaseapp.com'
    });
  }
}
