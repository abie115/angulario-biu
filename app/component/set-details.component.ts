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
    errorMessage: string;
    public disabled: boolean = true;
    
    constructor(
        private setService: SetService,
        private routeParams: RouteParams) {
    }

    ngOnInit() {
        let id = +this.routeParams.get('id');
        // this.getSet(id);
        this.setService.getSet(id).subscribe(
            set => this.set = set,
            error => this.errorMessage = <any>error
        );
    }
    
    updateSet() {
        this.setService.updateSet(this.set)
            .subscribe(
            set => { this.disabled = true; },
            error => console.log(error)
            );
    }
    
   isChanged() {
       this.disabled = false;
       console.log("button disabled: "+ this.disabled);
    }
    
    goBack() {
        window.history.back();
    }
    
    addWord(eng, pl) {
        this.set.word.push({ "eng": eng.value, "pl": pl.value });
        console.log(eng.value + ": " + pl.value);
    }
}