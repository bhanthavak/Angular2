import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { MessagesComponent } from './messages/messages.component';
import { AboutComponent } from './profile/about/about.component';
import { ContactComponent } from './profile/contact/contact.component';
import { Routes, RouterModule } from "@angular/router"

const APP_ROUTES: Routes = [
{ path: '', component: HomeComponent},
{ path: 'Home', component: HomeComponent},
{ path: 'profile', component: ProfileComponent},
{ path: 'messages', component: MessagesComponent},
{ path: 'profile/about', component: AboutComponent},
{ path: 'profile/contact', component: ContactComponent}
];

export const routing = RouterModule.forRoot(APP_ROUTES);