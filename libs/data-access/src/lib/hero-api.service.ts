import { Injectable } from '@angular/core';
import{NestedMSGService} from '@data-access/nested';

@Injectable({
  providedIn: 'root'
})
export class HeroApiService {
  constructor(private nestedMsgService: NestedMSGService) {
    this.nestedMsgService.sayGoodbye();
  }

  sayHello() {
    console.log('HeroApiService is working!');
  }
}
