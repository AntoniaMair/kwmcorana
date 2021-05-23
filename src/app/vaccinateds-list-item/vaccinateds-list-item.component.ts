import { Component, Input, OnInit } from '@angular/core';
import {Vaccinated} from '../shared/vacevent';

@Component({
  selector: 'a.kc-vaccinateds-list-item',
  templateUrl: './vaccinateds-list-item.component.html',
  styleUrls: ['./vaccinateds-list-item.component.css']
})
export class VaccinatedsListItemComponent implements OnInit {
  @Input() vaccinated: Vaccinated;

  constructor() { }

  ngOnInit() {
  }

}

