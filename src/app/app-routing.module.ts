import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { LocationListComponent } from './location-list/location-list.component';
import { LocationListItemComponent } from './location-list-item/location-list-item.component';
import { VaccinatedsListComponent } from './vaccinateds-list/vaccinateds-list.component';
import { VaceventListComponent } from './vacevent-list/vacevent-list.component';
import { VaceventFormComponent } from './vacevent-form/vacevent-form.component';
import { RegistrationFormComponent } from './registration-form/registration-form.component';

const routes: Routes = [
  { path: '', redirectTo: 'locaation', pathMatch: 'full' },
  { path: 'locations', component: LocationListComponent },
  { path: 'vaccinated/:vacevent_id', component: VaccinatedsListComponent },
  { path: "vacevent/:location_id", component:  VaceventListComponent},
  { path: "register/:vacevent_id", component:  RegistrationFormComponent},
  { path: "admin", component: VaceventFormComponent },
  { path: "admin/:id", component: VaceventFormComponent },
  { path: "admin/add/:location_id", component: VaceventFormComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule {}


