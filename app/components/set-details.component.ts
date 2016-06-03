import { Component, OnInit } from '@angular/core';
import { RouteParams, Router } from '@angular/router-deprecated';
import { SetService } from '../service/set.service';
import { Set } from '../model/set';

@Component({
    selector: 'set-words',
    styleUrls: ['style.css'],
    templateUrl: 'app/components/set-details.component.html'
})

export class SetDetailsComponent implements OnInit {

    set: Set;
    errorMessage: string;
    active = true;
    
    constructor(
        private setService: SetService,
        private routeParams: RouteParams,
        private router: Router) {
    }

    ngOnInit() {
        let id = +this.routeParams.get('id');
        this.setService.getSet(id).subscribe(
            set => this.set = set,
            error => console.error(error)
        );
    }


    updateSet() {
        this.setService.updateSet(this.set)
            .subscribe(
            set => this.gotoSets(),
            error => console.log(error)
            );
    }

    addWord(eng, pl) {
        if (!this.set.word) {
            this.set.word = [{ "eng": eng, "pl": pl }];
        } else {
            this.set.word.push({ "eng": eng, "pl": pl });
        }
        this.active = false;
        setTimeout(() => this.active = true, 0);
    }

    deleteWord(eng, pl) {
        let confirm = window.confirm("Are you sure to delete");
        if (confirm) {
            for (var i = 0; i < this.set.word.length; i++) {
                if (this.set.word[i].eng == eng && this.set.word[i].pl == pl) {
                    this.set.word.splice(i, 1);
                }
            }
        }
    }

    goBack() {
        this.gotoSets();
    }

    gotoSets() {
        this.router.navigate(['Sets']);
    }
}