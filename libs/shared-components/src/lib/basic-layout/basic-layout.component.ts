import { Component, Input } from '@angular/core';
import { Pages } from './basic-layout.model';

@Component({
  selector: 'devon4ts-samples-basic-layout',
  templateUrl: './basic-layout.component.html',
  styleUrls: ['./basic-layout.component.scss']
})
export class BasicLayoutComponent {

  @Input() pages: Pages[] = [];

}
