import { Component, OnInit } from '@angular/core';
import { NavigationService } from 'src/app/common/navigation.service';
import { routerTransition } from 'src/app/common/animations';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [
    routerTransition(),
  ]
})
export class HomeComponent implements OnInit {

  isHideMainContent = false;

  constructor(
    private navigationService: NavigationService,
    private route: Router
  ) {
    this.route.navigateByUrl('');
  }

  ngOnInit() {
    this.navigationService.goTo$.subscribe(resp => {
      if (resp === 0 || resp === '0') {
        this.isHideMainContent = false;
        this.route.navigateByUrl('');
      }
    });
  }

  getRouteAnimation(outlet) {
    return this.navigationService.animationValue;
  }

  hideMainContent() {
    this.isHideMainContent = true;
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
