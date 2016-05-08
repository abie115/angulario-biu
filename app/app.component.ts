import { Component, OnInit } from '@angular/core';
import { Set } from './model/set';
import { SetService } from './service/set.service';
import { SetListComponent } from './set-list.component';

@Component({
  selector: 'my-app',
  template:`
    <h1>{{title}}</h1>
    <h2>My Sets</h2>
    <ul class="sets">
      <li *ngFor="#set of sets"  [class.selected]="set === selectedSet"
        (click)="onSelect(set)">
        <span class="details">{{set.id}}</span> {{set.name}}
        <ul>
            <li *ngFor='#word of set.word'>
                Eng: {{word.eng}}, Pl: {{word.pl}}
            </li>
        </ul>
      </li>
    </ul>
  <set-words [set]="selectedSet"></set-words>
  
  `,
  directives: [SetListComponent],
     providers: [SetService]
})
export class AppComponent implements OnInit {
    title = 'Sets of English Words';
    sets : Set[];
  //set: Set;
    selectedSet: Set;
    constructor(private setService: SetService) { }
    onSelect(set: Set) { this.selectedSet = set; }
    
    getSets() {
         this.sets = this.setService.getSets();
    }
    
    ngOnInit() {
        this.getSets();
    }
    
   
}

