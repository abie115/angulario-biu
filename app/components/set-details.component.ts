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
        this.setService.getSet(id).subscribe(
            set => this.set = set,
            error => this.errorMessage = <any>error
        );
    }

    updateSet() {
        this.setService.updateSet(this.set)
            .subscribe(
            set => { },
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

    deleteWord(eng, pl) {
        let confirm = window.confirm("Are you sure to delete");
        if (confirm) {
            for (var i = 0; i < this.set.word.length; i++) {
                if (this.set.word[i].eng == eng && this.set.word[i].pl == pl) {
                    console.log("rowne :" + this.set.word[i].pl + " " + this.set.word[i].eng);
                    this.set.word.splice(i, 1);
                }
            }
        }

    }

    deleteSet(set) {
       
       let tmp = this.set;
       let tmpService = this.setService;
        delete this.set;
    
        tmpService.deleteSet(tmp)
            .subscribe(
            set => { },
            error => console.log(error)
            );
        this.gotoSets();
      //  console.log("zestawy " + this.set);
        
      /// console.log(set);
    }

    isChanged() {
        // this.disabled = false;
        //console.log("button disabled: " + this.disabled);
    }

    goBack() {
        window.history.back();
        this.gotoSets();
    }

    gotoSets() {
        this.router.navigate(['Sets']);
    }
}