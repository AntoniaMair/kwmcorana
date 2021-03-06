import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationService } from '../shared/authentication.service';
import {Vacevent} from '../shared/vacevent';
import { VaceventService } from '../shared/vacevent.service';

@Component({
  selector: 'a.kc-vacevent-list-item',
  templateUrl: './vacevent-list-item.component.html',
  styleUrls: ['./vacevent-list-item.component.css']
})
export class VaceventListItemComponent implements OnInit {
  @Input() vacevent: Vacevent;
  deletable: Boolean;
  full:Boolean;

  constructor( private ves: VaceventService,
    private route: ActivatedRoute,
    private router: Router,
    public authService: AuthenticationService) { }

  ngOnInit() {
    this.ves.getDeletable(this.vacevent.id).subscribe(res => {
    this.deletable = res;
      console.log(this.deletable);
    });
    this.ves.checkisFull(this.vacevent.id).subscribe(res => {
    this.full = res;
      console.log(this.full);
    });

  }

   /*isDeletable(vacevent){
    return true;
   /* this.ves.getDeletable(vacevent.id).subscribe(res => {
    this.deletable = res;
      console.log(this.deletable);
    });
    return this.deletable;
  }*/

  removeVacevent() {
    if (confirm('Wollen Sie diesen Termin wirklich löschen?')) {
      let currentUrl = this.router.url;
      this.ves.remove(this.vacevent.id).subscribe(res => {
        this.reloadCurrentRoute(currentUrl);
      });
    }
  }
   reloadCurrentRoute(currentUrl) {
    console.log(currentUrl);
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
      this.router.navigate([currentUrl]);
    });
  }

  

}

