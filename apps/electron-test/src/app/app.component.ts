import { Component , OnInit} from '@angular/core';

@Component({
  selector: 'devon4ts-samples-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'Devon4ngElectronTest';
  ngOnInit(): void {
    this.title = 'Devon4ngElectronTest';
  }
  createComponent(): void {
    const container = document.getElementById('container');
    const component = document.createElement('dish-form');
    container?.appendChild(component);
  }
}