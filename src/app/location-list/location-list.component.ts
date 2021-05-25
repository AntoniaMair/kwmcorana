import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AuthenticationService } from '../shared/authentication.service';
import { Location, Vacevent } from '../shared/location';
import { LocationService } from '../shared/location.service';

@Component({
  selector: 'kc-location-list',
  templateUrl: './location-list.component.html',
  styleUrls: ['./location-list.component.css']
})
export class LocationListComponent implements OnInit {
  locations: Location[];

  @Output() showDetailsEvent = new EventEmitter<Location>();

  constructor(private ls: LocationService, public authService: AuthenticationService) {}

  showDetails(location: Location) {
    this.showDetailsEvent.emit(location);
  }

  ngOnInit() {
    this.ls.getAll().subscribe(res => {
      this.locations = res;
      console.log(this.locations);
    });
  }
}
