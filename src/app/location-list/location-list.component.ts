import { Component, EventEmitter, OnInit, Output } from '@angular/core';
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

  constructor(private ls: LocationService) {}

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
