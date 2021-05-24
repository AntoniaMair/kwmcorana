import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Vaccinated, Vacevent } from '../shared/vacevent';
import { VaceventService } from '../shared/vacevent.service';
import {Location} from '../shared/location';
import { VaceventFactory } from '../shared/vacevent-factory';

@Component({
  selector: 'kc-myevents',
  templateUrl: './myevents.component.html',
  styleUrls: ['./myevents.component.css']
})
export class MyeventsComponent implements OnInit {
 vacevent:Vacevent;

  constructor(private ves : VaceventService, private route: ActivatedRoute,
private router: Router) { }

  ngOnInit() {
    console.log(this.route.snapshot.params);
    const id = this.route.snapshot.params["vaccinated_id"];
    this.ves.getByVaccinated(id).subscribe(res => {

      //check how this can work
      //this.vacevent = VaceventFactory.fromObject(res);
      console.log(this.vacevent);
    });

  }

  
}