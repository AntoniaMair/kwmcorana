import { Component, VERSION } from '@angular/core';
import { AuthenticationService } from './shared/authentication.service';
import { VaccinatedService } from './shared/vaccinated.service';

@Component({
  selector: 'kc-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {

  constructor(public authService: AuthenticationService, private vs: VaccinatedService,) { }
  //vaccinated_id:string = this.getVaccinatedId() ? this.getVaccinatedId() : "";

  ngOnInit() {
  }

  getVaccinatedId(){
    return this.authService.getVaccinatedId();
  }

  isLoggedIn() {
  return this.authService.isLoggedIn();
  }

  isRegistered(){
    return this.authService.isRegistered();
  }

  getLoginLabel(){
    if(this.isLoggedIn()){
      return "Logout";
    } else {
      return "Login";
    }
  }
    //name = 'Angular ' + VERSION.major;
}

