import { Injectable } from '@angular/core';

@Injectable({
  providedIn:'root'
})
export class NestedMSGService {
  constructor() { }
  sayGoodbye() {
    console.log('OOPSs!');
  }
}
