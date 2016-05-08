import { Component, OnInit } from '@angular/core';
import { RouteParams } from '@angular/router-deprecated';
import { SetService } from '../service/set.service';
import { Set } from '../model/set';

@Component({
  selector: 'set-words',
  templateUrl: 'app/component/set-details.component.html'
})

export class SetDetailsComponent implements OnInit {

    set: Set;
    
    constructor(
        private setService: SetService,
        private routeParams: RouteParams) {
    }
    
    ngOnInit() {
        let id = +this.routeParams.get('id');
        this.setService.getSet(id).then(set => this.set = set);
    }
    goBack() {
      window.history.back();
        
    }
    addWord(eng,pl){
        this.set.word.push({"eng":eng.value,"pl":pl.value});
        console.log(eng.value+": "+pl.value);
    }
}