import { Component, Input } from '@angular/core';
import { Set } from './model/set';

@Component({
  selector: 'set-words',
  template: `
    <div *ngIf="set">
      <h2>{{set.name}}</h2>
      <div><label>id: </label>{{set.id}}</div>
      <div>
        <label>name: </label>
        <input [(ngModel)]="set.name" placeholder="name"/>
      </div>
      <ul>
            <li *ngFor='#word of set.word'>
                ENG: 
                <input [(ngModel)]="word.eng" placeholder="eng"/>
                PL:  
                <input [(ngModel)]="word.pl" placeholder="pl"/>
            </li>
        </ul>
        <input #eng >
        <input #pl >
        <button (click)="addWord(eng,pl)">Add word </button>
        
    </div>
        
  `
})

export class SetListComponent {
    @Input() 
    set: Set;

    addWord(eng,pl){
        this.set.word.push({"eng":eng.value,"pl":pl.value});
        console.log(eng.value+": "+pl.value);
    }
}