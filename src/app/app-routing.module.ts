import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { LocationListComponent } from './location-list/location-list.component';
import { LocationListItemComponent } from './location-list-item/location-list-item.component';
import { VaccinatedsListComponent } from './vaccinateds-list/vaccinateds-list.component';
import { VaceventListComponent } from './vacevent-list/vacevent-list.component';
import { VaceventFormComponent } from './vacevent-form/vacevent-form.component';
import { RegistrationFormComponent } from './registration-form/registration-form.component';
import { MyeventsComponent } from './myevents/myevents.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: '', redirectTo: 'locations', pathMatch: 'full' },
  { path: 'locations', component: LocationListComponent },
  { path: 'vaccinated/:vacevent_id', component: VaccinatedsListComponent },
  { path: "vacevent/:location_id", component:  VaceventListComponent},
  { path: "register/:vacevent_id", component:  RegistrationFormComponent},
  //{ path: "admin", component: VaceventFormComponent },
  { path: "admin/:id", component: VaceventFormComponent },
  { path: "admin/add/:location_id", component: VaceventFormComponent },
  { path: "myevents/:vaccinated_id", component: MyeventsComponent },
  { path: 'login', component: LoginComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule {}


