import { Component } from '@angular/core';
import { Set } from './model/set';
import { SETS } from './data';

@Component({
  selector: 'my-app',
  template:`
    <h1>{{title}}</h1>
    <h2>My Sets</h2>
    <ul class="sets">
      <li *ngFor="let set of sets">
    <span class="badge">{{set.id}}</span>
        <ul>
         <li *ngFor='#word of set.word'>
           Eng: {{word.eng}}, Pl: {{word.pl}}
          </li>
        </ul>
      </li>
    </ul>
    <ul> 
  `
})
export class AppComponent {
  title = 'Sets of English Words';
  sets = SETS;
  set: Set;
}

