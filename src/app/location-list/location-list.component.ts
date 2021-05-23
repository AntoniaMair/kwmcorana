import { Component, OnInit } from '@angular/core';
import {Location, Vacevent} from '../shared/location';

@Component({
  selector: 'kc-location-list',
  templateUrl: './location-list.component.html',
  styleUrls: ['./location-list.component.css']
})
export class LocationListComponent implements OnInit {
   locations: Location[];

  constructor() { }

  ngOnInit() {
   
  }

}