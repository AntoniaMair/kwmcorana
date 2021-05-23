import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Vacevent } from "../shared/vacevent";
import { Vaccinated } from "../shared/vaccinated";
import { VaccinatedFactory } from "../shared/vaccinated-factory";
import { VaccinatedService } from "../shared/vaccinated.service";

@Component({
  selector: 'kc-vaccinateds-list',
  templateUrl: './vaccinateds-list.component.html',
  styleUrls: ['./vaccinateds-list.component.css']
})

export class VaccinatedsListComponent implements OnInit {
  vaccinateds: Vaccinated[];
  //vacevent: Vacevent = VaceventFactory.empty();

  constructor(
    private vs: VaccinatedService,
    private route: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit() {
    const params = this.route.snapshot.params;
    console.log(params["vacevent_id"]);
    this.vs.getAll(params["vacevent_id"]).subscribe(res => {
    this.vaccinateds = res;
      console.log(this.vaccinateds);
    });
  
  }

}