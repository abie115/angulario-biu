import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router-deprecated';
import { Set } from '../model/set';
import { SetService } from '../service/set.service';
import { SetDetailsComponent } from './set-details.component';

@Component({
    selector: 'my-sets',
    templateUrl: 'app/components/sets.component.html',
    directives: [SetDetailsComponent]
})

export class SetsComponent implements OnInit {

    sets: Set[];
    selectedSet: Set;
    errorMessage: string;
    

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
            error => this.errorMessage = <any>error);
    }

    addSet(name: string) {
        if (!name) { return; }
        this.setService.addSet(name)
            .subscribe(
            set => this.sets.push(set),
            error => this.errorMessage = <any>error);
    }
    
    onSelect(set: Set) { this.selectedSet = set; }

    gotoDetail() {
        this.router.navigate(['SetDetails', { id: this.selectedSet.id }]);
    }
}

