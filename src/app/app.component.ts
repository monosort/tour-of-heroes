import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
// Em vez do alias
import { HeroApiService } from '@tour-of-heroes/data-access'; 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Tour of heroes';
  constructor(private heroApi: HeroApiService) {
    this.heroApi.sayHello();
  }


}
