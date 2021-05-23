import { Component, Input, OnInit } from '@angular/core';
import {Vacevent} from '../shared/vacevent';

@Component({
  selector: 'a.kc-vacevent-list-item',
  templateUrl: './vacevent-list-item.component.html',
  styleUrls: ['./vacevent-list-item.component.css']
})
export class VaceventListItemComponent implements OnInit {
  @Input() vacevent: Vacevent;

  constructor() { }

  ngOnInit() {
  }

}

