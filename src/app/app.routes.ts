import { Routes } from '@angular/router';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { ConferencePageComponent } from './pages/conference-page/conference-page.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { EditorsreviewersPageComponent } from './pages/editorsreviewers-page/editorsreviewers-page.component';
import { PubArchivePageComponent } from './pages/pub-archive-page/pub-archive-page.component';
import { SubmissionPageComponent } from './pages/submission-page/submission-page.component';
import { CurrentPageComponent } from './pages/current-page/current-page.component';

export const routes: Routes = [
  { path: 'home', component: HomepageComponent },
  { path: 'conference', component: ConferencePageComponent },
  { path: 'contact', component: ContactPageComponent },
  { path: 'editorsreviewers', component: EditorsreviewersPageComponent },
  { path: 'pub-archive', component: PubArchivePageComponent },
  { path: 'submission', component: SubmissionPageComponent },
  { path: 'current', component: CurrentPageComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', redirectTo: '/home' },
];
