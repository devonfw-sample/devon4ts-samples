import { Component } from '@angular/core';
import { ConfigService } from './core/config/config.service';

@Component({
  selector: 'devon4ts-samples-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'angular-app-initializer';

  constructor(public configService: ConfigService) { }
}
