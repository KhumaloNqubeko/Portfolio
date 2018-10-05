import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { DialogPopUpComponent } from 'src/app/dialog-pop-up/dialog-pop-up.component';
import { NavigationService } from 'src/app/common/navigation.service';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss']
})
export class ResumeComponent implements OnInit {

  constructor(private navigationService: NavigationService) { }

  ngOnInit() {

  }

  returnHome() {
    this.navigationService.emitGoto();
  }

}
