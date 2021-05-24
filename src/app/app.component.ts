import { Component, VERSION } from '@angular/core';
import { AuthenticationService } from './shared/authentication.service';

@Component({
  selector: 'kc-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {

constructor(private authService: AuthenticationService) { }

isLoggedIn() {
return this.authService.isLoggedIn();
}

getLoginLabel(){
if(this.isLoggedIn()){
return "Logout";
} else {
return "Login";
}
}



  name = 'Angular ' + VERSION.major;
}
