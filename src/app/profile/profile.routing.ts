import { ProfileComponent } from '../profile/profile.component';
import { AboutComponent } from '../profile/about/about.component';
import { ContactComponent } from '../profile/contact/contact.component';
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent} from '../home/home.component';

const PROFILE_ROUTES: Routes = [
{ path: '', component: HomeComponent},
{ path: 'profile', component: ProfileComponent},
{ path: 'profile/about', component: AboutComponent},
{ path: 'profile/contact', component: ContactComponent}
];

export const routing = RouterModule.forRoot(PROFILE_ROUTES);