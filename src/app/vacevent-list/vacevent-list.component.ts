import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Vacevent } from "../shared/vacevent";
import { Location } from "../shared/location";
import { VaceventFactory } from "../shared/vacevent-factory";
import { VaceventService } from "../shared/vacevent.service";
import { AuthenticationService } from "../shared/authentication.service";

@Component({
  selector: 'kc-vacevent-list',
  templateUrl: './vacevent-list.component.html',
  styleUrls: ['./vacevent-list.component.css']
})

export class VaceventListComponent implements OnInit {
  vacevents: Vacevent[];
  
  //vacevent: Vacevent = VaceventFactory.empty();

  constructor(
    private ves: VaceventService,
    private route: ActivatedRoute,
    private router: Router,
    public authService: AuthenticationService
  ) { }

  ngOnInit() {
    const params = this.route.snapshot.params;
    console.log(params["location_id"]);
    this.ves.getAll(params["location_id"]).subscribe(res => {
    this.vacevents = res;
      console.log(this.vacevents);
    });
  
  }

 

}



