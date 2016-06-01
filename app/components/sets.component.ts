import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router-deprecated';
import { Set } from '../model/set';
import { SetService } from '../service/set.service';
import { SetDetailsComponent } from './set-details.component';
import { SetFlashCardsComponent } from './set-flashcards.component';

@Component({
    selector: 'my-sets',
    templateUrl: 'app/components/sets.component.html',
    styleUrls: ['style.css'],
    directives: [SetDetailsComponent, SetFlashCardsComponent]
})

export class SetsComponent implements OnInit {

    sets: Set[];
    selectedSet: Set;


    constructor(
        private router: Router,
        private setService: SetService) { }


    ngOnInit() {
        console.log("ddddd " + this.sets);
        this.getSets();
    }

    getSets() {
        this.setService.getSets()
            .subscribe(
            sets => this.sets = sets,
            error => console.error(error));
    }

    addSet(name: string) {
        if (!name) { return; }
        this.setService.addSet(name)
            .subscribe(
            set => this.sets.push(set),
            error => console.error(error));
    }

    deleteSet(set: Set) {
        this.setService.deleteSet(set)
            .subscribe(
            resp => this.removeSetFromList(set),
            error => console.error(error)
            );
    }

    removeSetFromList(set) {
        if (set == this.selectedSet) {
            this.selectedSet = null;
        }
        let id = this.sets.indexOf(set);
        this.sets.splice(id, 1);
    }

    onSelect(set: Set) { this.selectedSet = set; }

    gotoDetail() {
        this.router.navigate(['SetDetails', { id: this.selectedSet.id }]);
    }

    gotoFlashCards() {
        this.router.navigate(['FlashCards', { id: this.selectedSet.id }]);
    }
}

