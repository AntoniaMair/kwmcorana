import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { VaccinatedFactory } from '../shared/vaccinated-factory';
import { VaccinatedService } from '../shared/vaccinated.service';
import { Vaccinated } from '../shared/vacevent';

@Component({
  selector: 'a.kc-vaccinateds-list-item',
  templateUrl: './vaccinateds-list-item.component.html',
  styleUrls: ['./vaccinateds-list-item.component.css']
})
export class VaccinatedsListItemComponent implements OnInit {
  @Input() vaccinated: Vaccinated;

  constructor(
    private vs: VaccinatedService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {}

  removeVaccinationevent() {
    if (confirm('Wollen Sie die Person wirklich löschen?')) {
      let currentUrl = this.router.url;
      this.vs.remove(this.vaccinated.id).subscribe(res => {
        this.reloadCurrentRoute(currentUrl);
      });
    }
  }

  updateVaccinatedStatusevent() {
    if (confirm('Wollen Sie diese Person als geimpft markieren?')) {
      const updatedVaccinated: Vaccinated = VaccinatedFactory.fromObject(
        this.vaccinated
      );
      console.log(updatedVaccinated);
      let currentUrl = this.router.url;
      updatedVaccinated.vaccinated = 1;
      this.vs.update(updatedVaccinated).subscribe(res => {
        this.reloadCurrentRoute(currentUrl);
      });
    }
  }

  reloadCurrentRoute(currentUrl) {
    console.log(currentUrl);
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
      this.router.navigate([currentUrl]);
    });
  }
}
