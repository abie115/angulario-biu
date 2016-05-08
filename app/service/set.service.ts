import { Injectable } from '@angular/core';
import { SETS } from '../data/data';

@Injectable()
export class SetService {
     getSets() {
         return Promise.resolve(SETS);
  }
    
   getSet(id: number) {
    return Promise.resolve(SETS).then(
      sets => sets.filter(set => set.id === id)[0]
    );
  }
}