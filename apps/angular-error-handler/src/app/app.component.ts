import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'devon4ts-samples-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'angular-error-handler';

  constructor(private httpClient: HttpClient) {}

  serverError() {
    this.httpClient.get('non existing url').subscribe();
  }

  clientError() {
    // First, serve the application and then uncomment the next line to test the Client Error interceptor
    // return varNotDeclared;
  }
}
