import { FormControl } from "@angular/forms";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { VaccinatedService } from "./vaccinated.service";

export class VaccinatedValidators {
  
  static svnrExists(vs : VaccinatedService) {
  return function(control: FormControl): Observable<{[error: string]: any}> {
   return vs.checkSvnr(control.value)
     .pipe(map(exists => !exists ? null : {svnrExists: {valid: false}}));
 }
}

}