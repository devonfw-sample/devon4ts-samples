import { Component, OnInit } from '@angular/core';
import { AngularLibraryService } from 'my-ng-library';

@Component({
  selector: 'devon4ts-samples-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  toUpper = '';
  title = 'angular-library-test';

  constructor(private myLibraryService: AngularLibraryService) {}
  ngOnInit(): void {
    this.toUpper = this.myLibraryService.firstLetterToUpper('test');
  }
}
