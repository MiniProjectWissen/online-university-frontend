import { Component } from '@angular/core';
import { Router,NavigationEnd } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'online-university-frontend';
  hideHeader = false;
  hideFooter = false;

  constructor(private router: Router) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        // Check the current route and set hideHeader and hideFooter accordingly
        this.hideHeader = event.url.includes('/login') || event.url.includes('/register');
        this.hideFooter = event.url.includes('/login') || event.url.includes('/register');
      }
    });
  }
}
