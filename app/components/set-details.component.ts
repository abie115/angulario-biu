import { Component, OnInit } from '@angular/core';
import { RouteParams } from '@angular/router-deprecated';
import { SetService } from '../service/set.service';
import { Set } from '../model/set';

@Component({
    selector: 'set-words',
    templateUrl: 'app/components/set-details.component.html'
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

    addWord(eng, pl) {
        if (!this.set.word) {
            this.set.word = [{ "eng": eng, "pl": pl }];
            this.setService.updateSet(this.set)
                .subscribe(
                set => { },
                error => console.log(error)
                );
            console.log("puste " + this.set.word);
        } else {
            console.log("pelne " + this.set.word);
            this.set.word.push({ "eng": eng, "pl": pl });
            this.setService.updateSet(this.set)
                .subscribe(
                set => { },
                error => console.log(error)
                );
            console.log("eng " + eng + "pl " + pl + " set " + this.set.word);
        }
    }

    isChanged() {
        this.disabled = false;
        console.log("button disabled: " + this.disabled);
    }

    goBack() {
        window.history.back();
    }
}