import { Component, Input, OnInit } from '@angular/core';
import { Vaccinated } from '../shared/vacevent';

@Component({
  selector: 'kc-myevents',
  templateUrl: './myevents.component.html',
  styleUrls: ['./myevents.component.css']
})
export class MyeventsComponent implements OnInit {
 @Input() vaccinated: Vaccinated;

  constructor() { }

  ngOnInit() {
  }

}