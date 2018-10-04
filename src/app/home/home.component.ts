import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  slideshow() {
    // const elem  = document.getElementById('check-class');

    // if (elem.style.display === 'none') {
    //   elem.style.display = 'block';
    // } else {
    //   elem.style.display = 'none';
    // }
  }
}
