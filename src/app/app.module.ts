import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { LocationListComponent } from './location-list/location-list.component';
import { LocationListItemComponent } from './location-list-item/location-list-item.component';
import { VaceventListComponent } from './vacevent-list/vacevent-list.component';
import { VaccinatedsListComponent } from './vaccinateds-list/vaccinateds-list.component';
import { VaceventFormComponent } from './vacevent-form/vacevent-form.component';
import { RegistrationFormComponent } from './registration-form/registration-form.component';
import { LocationService } from './shared/location.service';
import { AppRoutingModule } from './app-routing.module';
import { VaccinatedService } from './shared/vaccinated.service';
import { VaceventService } from './shared/vacevent.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';



@NgModule({
  imports:      [ BrowserModule, AppRoutingModule, HttpClientModule],
  declarations: [ AppComponent, HelloComponent, LocationListComponent, LocationListItemComponent, VaceventListComponent, VaccinatedsListComponent, VaceventFormComponent, RegistrationFormComponent ],
  bootstrap:    [ AppComponent ],
  providers: [LocationService, VaccinatedService, VaceventService]
})
export class AppModule { }
