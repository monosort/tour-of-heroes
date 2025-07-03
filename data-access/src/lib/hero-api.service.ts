import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HeroApiService {
  constructor() {}

  sayHello() {
    console.log('HeroApiService is working!LINK');
  }
}
