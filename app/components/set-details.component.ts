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
   // public disabled: boolean = true;
    submitted = false;

    onSubmit() {
        this.submitted = true;
    }
    constructor(
        private setService: SetService,
        private routeParams: RouteParams,
        private router: Router) {
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
            set => { /*this.disabled = true;*/ },
            error => console.log(error)
            );
        this.gotoSets();
    }

    addWord(eng, pl) {
        if (!this.set.word) {
            this.set.word = [{ "eng": eng, "pl": pl }];
            /*this.setService.updateSet(this.set)
                .subscribe(
                set => { },
                error => console.log(error)
                );*/
        } else {
            this.set.word.push({ "eng": eng, "pl": pl });
          /*  this.setService.updateSet(this.set)
                .subscribe(
                set => { },
                error => console.log(error)
                );*/
        }


    }

    isChanged() {
       // this.disabled = false;
        //console.log("button disabled: " + this.disabled);
    }

    goBack() {
        window.history.back();
        this.gotoSets();
    }
    
    gotoSets(){
        this.router.navigate(['Sets' ]);
    }
}