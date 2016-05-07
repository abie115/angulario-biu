import { Component } from '@angular/core';
import { Words } from './model/word';
import { WORDS } from './data';



@Component({
  selector: 'my-app',
  template:`
    <h1>{{title}}</h1>
    <h2>My Sets</h2>
    <ul class="sets">
      <li *ngFor="let word of words">
    <span class="badge">{{word.id}}</span>
        <ul>
         <li *ngFor='#word of word.word'>
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
  words = WORDS;
  word: Words;
}

