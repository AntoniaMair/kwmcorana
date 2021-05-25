import { Component, Input, OnInit } from '@angular/core';
import { AuthenticationService } from '../shared/authentication.service';
import {Location} from '../shared/location';

@Component({
  selector: 'a.kc-location-list-item',
  templateUrl: './location-list-item.component.html',
  styleUrls: ['./location-list-item.component.css']
})
export class LocationListItemComponent implements OnInit {
  @Input() location: Location;

  constructor(public authService: AuthenticationService) { }

  ngOnInit() {
  }

}




