import { Component } from '@angular/core';
import { Pages } from '@devon4ts-samples/shared-components';

@Component({
  selector: 'devon4ts-samples-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'angular-material-basic-layout';
  pages: Pages[] = [
    {
      id: 'home',
      routeUrl: './',
      icon: 'home',
      pageTitle: 'Home',
      pageSubTitle: 'sample home page',
    },
    {
      id: 'sampleData',
      routeUrl: './data',
      icon: 'grid_on',
      pageTitle: 'Data',
      pageSubTitle: 'sample data page',
    },
  ];
}
