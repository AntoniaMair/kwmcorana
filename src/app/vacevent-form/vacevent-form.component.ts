

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
if (id) {
this.isUpdatingVacevent = true;
this.ves.getSingle(id).subscribe(vacevent => {
this.vacevent = vacevent;
this.initVacevent();
});
}
this.initVacevent();
}

initVacevent() {
this.vaceventForm = this.fb.group({
id: this.vacevent.id,
vacdate: [this.vacevent.vacdate, Validators.required],
maxPers: [this.vacevent.maxPers, [Validators.required, Validators.min(1)]],
location_id: [this.vacevent.location_id, Validators.required]
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
let location_id = vacevent.location_id;
this.ves.create(vacevent).subscribe(res => {
this.vacevent = VaceventFactory.empty();
this.vaceventForm.reset(VaceventFactory.empty());
this.router.navigate(["../vacevent", location_id], { relativeTo: this.route
});
});
}
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

