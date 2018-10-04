import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { DialogPopUpComponent } from 'src/app/dialog-pop-up/dialog-pop-up.component';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss']
})
export class ResumeComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit() {

  }

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogPopUpComponent, {

    }
    );

    dialogRef.afterClosed().subscribe(result => {

    });
  }

}
