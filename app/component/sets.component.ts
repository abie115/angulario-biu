import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router-deprecated';

import { Set } from '../model/set';
import { SetService } from '../service/set.service';
import { SetDetailsComponent } from './set-details.component';

@Component({
  selector: 'my-sets',
  templateUrl: 'app/component/sets.component.html',
  directives: [SetDetailsComponent]
})
export class SetsComponent implements OnInit {
    sets: Set[];
  selectedSet: Set;

  constructor(
    private router: Router,
    private setService: SetService) { }

  getSets() {
    this.setService.getSets().then(sets => this.sets = sets);
  }

  ngOnInit() {
    this.getSets();
  }

  onSelect(set: Set) { this.selectedSet = set; }

  gotoDetail() {
    this.router.navigate(['SetDetails', { id: this.selectedSet.id }]);
  }
}

