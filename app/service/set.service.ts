import { Injectable } from '@angular/core';
import { SETS } from '../data/data';

@Injectable()
export class SetService {
     getSets() {
         return SETS;
  }
}