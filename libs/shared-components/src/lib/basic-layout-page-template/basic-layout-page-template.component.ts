import { Component, Input } from '@angular/core';

@Component({
  selector: 'devon4ts-samples-basic-layout-page-template',
  template: `
    <h2>{{ pageTitle }}</h2>
    <ng-content></ng-content>
  `,
  styles: [
    'h2 { text-align: center; margin-top: 50px }'
  ]
})
export class BasicLayoutPageTemplateComponent {

  @Input() pageTitle = '';

}
