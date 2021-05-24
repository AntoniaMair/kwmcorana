import { ActivatedRoute, Router } from "@angular/router";
import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, FormArray, Validators, FormControl
} from "@angular/forms";
import { RegistrationFormErrorMessages } from "./registration-form-error-messages";
import { VaccinatedFactory } from "../shared/vaccinated-factory";
import { VaccinatedService } from "../shared/vaccinated.service";
import { Vaccinated } from "../shared/vaccinated";
//import { VaccinatedValidators } from "../shared/vaccinated-validators";

@Component({
  selector: 'kc-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.css']
})
export class RegistrationFormComponent implements OnInit {
registrationForm: FormGroup;
vaccinated = VaccinatedFactory.empty();
errors: { [key: string]: string } = {};

constructor(
private fb: FormBuilder,
private vs: VaccinatedService,
private route: ActivatedRoute,
private router: Router
) {}

ngOnInit() {
const id = this.route.snapshot.params["vacevent_id"];
this.initVaccinated();
}

initVaccinated() {
this.registrationForm = this.fb.group({
id: this.vaccinated.id,
vacevent_id: this.route.snapshot.params["vacevent_id"],
firstname: [this.vaccinated.firstname, Validators.required],
lastname: [this.vaccinated.lastname, Validators.required],
sex: [this.vaccinated.sex, Validators.required],
birthdate: [this.vaccinated.birthdate, Validators.required],
svnr: [this.vaccinated.svnr, Validators.required,],
email: [this.vaccinated.email, Validators.required],
tel: [this.vaccinated.tel, Validators.required],
});

this.registrationForm.statusChanges.subscribe(() =>
this.updateErrorMessages());
}

submitForm() {
const vaccinated: Vaccinated = VaccinatedFactory.fromObject(this.registrationForm.value);
console.log(vaccinated);
this.vs.create(vaccinated).subscribe(res => {
const vaccinated_id = res["id"];
this.vaccinated = VaccinatedFactory.empty();
this.registrationForm.reset(VaccinatedFactory.empty());
this.router.navigate(["../../myevents", vaccinated_id], { relativeTo: this.route
});
});
}

updateErrorMessages() {
console.log("Is invalid? " + this.registrationForm.invalid);
this.errors = {};
for (const message of RegistrationFormErrorMessages) {
const control = this.registrationForm.get(message.forControl);
if (
control &&
control.dirty &&
control.invalid &&
control.errors[message.forValidator] &&
!this.errors[message.forControl]
) {
this.errors[message.forControl] = message.text;
}
}
}
}

