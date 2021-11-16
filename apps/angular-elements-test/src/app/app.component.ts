import { Component } from '@angular/core';

@Component({
  selector: 'devon4ts-samples-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Devon4tsAngularElementsTest';
  
  createComponent(): void {
    const container = document.getElementById('container');
    const component = document.createElement('dish-form');
    container.appendChild(component);
  }
}
