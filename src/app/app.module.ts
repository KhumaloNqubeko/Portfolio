import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from 'src/app/modules/material.module';
import { ContactComponent } from './contact/contact.component';

import { ResumeComponent } from './resume/resume.component';
import { FormsModule } from '@angular/forms';
import { DialogPopUpComponent } from 'src/app/dialog-pop-up/dialog-pop-up.component';
import { SimplePdfViewerModule } from 'simple-pdf-viewer';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactComponent,
    ResumeComponent,
    DialogPopUpComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    SimplePdfViewerModule
  ],
  providers: [],
  entryComponents: [DialogPopUpComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
