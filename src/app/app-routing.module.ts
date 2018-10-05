import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ResumeComponent } from 'src/app/resume/resume.component';
import { ContactComponent } from 'src/app/contact/contact.component';
import { HomeComponent } from 'src/app/home/home.component';
import { AboutComponent } from 'src/app/about/about.component';

const routes: Routes = [
  { path: 'contact', component: ContactComponent, data: { num: 1 } },
  { path: 'resume', component: ResumeComponent, data: { num: 5 } },
  { path: 'home', component: HomeComponent, data: { num: 6 } },
  { path: 'about', component: AboutComponent, data: { num: 7 } },

  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
