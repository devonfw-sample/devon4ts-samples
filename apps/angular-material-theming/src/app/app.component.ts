import { Component } from '@angular/core';
import { Pages } from 'libs/shared-components/src/lib/basic-layout/basic-layout.model';

@Component({
  selector: 'devon4ts-samples-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'angular-material-theming';
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
