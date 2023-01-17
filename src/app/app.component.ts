import { Component, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { NavigationEnd } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  currentComponent: string = 'about-me';
  constructor(@Inject(Router) private router: Router) {
    this.router.events.subscribe(val => {
        if(val instanceof NavigationEnd) {
            this.currentComponent = val.url.slice(1);
        }
    });
  }

}
