import { Component, OnInit } from '@angular/core';
import { NavigationService } from 'src/app/common/navigation.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  constructor(private navigationService: NavigationService) { }

  ngOnInit() {
  }

  returnHome() {
    this.navigationService.emitGoto();
  }
}
