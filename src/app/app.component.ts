import { Component, VERSION } from '@angular/core';
import { AuthenticationService } from './shared/authentication.service';
import { VaccinatedService } from './shared/vaccinated.service';

@Component({
  selector: 'kc-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {

  constructor(private authService: AuthenticationService, private vs: VaccinatedService,) { }
  //vaccinated_id:string = this.getVaccinatedId() ? this.getVaccinatedId() : "";

  ngOnInit() {
  }

  getVaccinatedId(){
    if(this.isLoggedIn()){
      const vaccinated_id = localStorage.getItem("vaccinated_id");
      if(vaccinated_id > '0'){
          return vaccinated_id;
      }
      else return '';
    }
  }

  isLoggedIn() {
  return this.authService.isLoggedIn();
  }

  isRegistered(){
    if(this.getVaccinatedId() != "")return true;
    else return false;
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

