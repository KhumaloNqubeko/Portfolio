import { Component, OnInit, ViewChild } from '@angular/core';
import { SimplePdfViewerComponent, SimplePDFBookmark } from 'simple-pdf-viewer';
import { NavigationService } from 'src/app/common/navigation.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {


  constructor(private navigationService: NavigationService) { }

  ngOnInit() {

  }

  returnHome() {
    this.navigationService.emitGoto();
  }

}
