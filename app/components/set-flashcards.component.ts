import { Component, OnInit } from '@angular/core';
import { RouteParams } from '@angular/router-deprecated';
import { SetService } from '../service/set.service';
import { Set } from '../model/set';

@Component({
    selector: 'set-words',
    styleUrls: ['style.css'],
    templateUrl: 'app/components/set-flashcards.component.html'
})

export class SetFlashCardsComponent implements OnInit {

    set: Set;
    selectedSet: { eng: string, pl: string };
    errorMessage: string;
    public disabled: boolean = true;
    showTranslate: boolean = false;
    
    clickEnglish: boolean =false;
    clickPolish: boolean = false;
   
    constructor(
        private setService: SetService,
        private routeParams: RouteParams) {
    }

    ngOnInit() {
        let id = +this.routeParams.get('id');
        this.setService.getSet(id).subscribe(
            set => this.set = set,
            error => this.errorMessage = <any>error
        );
    }
  


   onSelect(words: { eng: string, pl: string }) { 
       this.selectedSet = words;       
        this.showTranslate = !this.showTranslate;
      
   }
    
    english(){
         this.clickPolish = false; 
         this.clickEnglish = !this.clickEnglish;
          
    }
    
    polish(){
         this.clickEnglish =false;
         this.clickPolish = !this.clickPolish;   
    }
    
   goBack() {
        window.history.back();
    }
}