

import { ActivatedRoute, Router } from "@angular/router";
import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, FormArray, Validators, FormControl
} from "@angular/forms";
import { VaceventFormErrorMessages } from "./vacevent-form-error-messages";
import { VaceventFactory } from "../shared/vacevent-factory";
import { VaceventService } from "../shared/vacevent.service";
import { Vacevent, Vaccinated } from "../shared/vacevent";
//import { VaceventValidators } from "../shared/vacevent-validators";

@Component({
  selector: 'kc-vacevent-form',
  templateUrl: './vacevent-form.component.html',
  styleUrls: ['./vacevent-form.component.css']
})

export class VaceventFormComponent implements OnInit {
vaceventForm: FormGroup;
vacevent = VaceventFactory.empty();
errors: { [key: string]: string } = {};
isUpdatingVacevent = false;

constructor(
private fb: FormBuilder,
private ves: VaceventService,
private route: ActivatedRoute,
private router: Router
) {}

ngOnInit() {
const id = this.route.snapshot.params["id"];
const location_id = this.route.snapshot.params["location_id"];
if (id) {
this.isUpdatingVacevent = true;
this.ves.getSingle(id).subscribe(vacevent => {
this.vacevent = vacevent;
this.initVacevent();
});
}
else
  this.initVacevent();

}

//TODO: beschreibung Kathi hilfe
localVacDate: Date;
localVacString: string;

initVacevent() {
//TODO: beschreibung Kathi hilfe
this.localVacDate = new Date(this.vacevent.vacdate);
this.localVacString = this.toISOLocal(this.localVacDate).slice(0,-10);
this.vaceventForm = this.fb.group({
id: this.vacevent.id,
vacdate: [this.localVacString, Validators.required],
maxPers: [this.vacevent.maxPers, [Validators.required, Validators.min(1)]],
location_id: this.vacevent.location_id,
});

this.vaceventForm.statusChanges.subscribe(() =>
this.updateErrorMessages());
}

submitForm() {
const vacevent: Vacevent = VaceventFactory.fromObject(this.vaceventForm.value);
if (this.isUpdatingVacevent) {
this.ves.update(vacevent).subscribe(res => {
this.router.navigate(["../../vacevent", vacevent.location_id], {
relativeTo: this.route
});
});
} else {
vacevent.location_id =  this.route.snapshot.params["location_id"];
let location_id = vacevent.location_id;
this.ves.create(vacevent).subscribe(res => {
this.vacevent = VaceventFactory.empty();
this.vaceventForm.reset(VaceventFactory.empty());
this.router.navigate(["../../../vacevent", location_id], { relativeTo: this.route
});
});
}
}
toISOLocal(d) {
const z = n => ('0' + n).slice(-2);
let off = d.getTimezoneOffset();
const sign = off < 0 ? '+' : '-';
off = Math.abs(off);
return new Date(d.getTime() - (d.getTimezoneOffset() * 60000)).toISOString().slice(0, -1) + sign + z(off / 60 | 0) + ':' + z(off % 60);
}

updateErrorMessages() {
console.log("Is invalid? " + this.vaceventForm.invalid);
this.errors = {};
for (const message of VaceventFormErrorMessages) {
const control = this.vaceventForm.get(message.forControl);
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

