import { Component, OnInit } from '@angular/core';

// for reading rout parameters
import { ActivatedRoute } from '@angular/router';

//import the data model (interface) for this component
import { PeriodicElement } from '../../models/periodicElement';

//import the service that handles the data model
import { ChemicalElementsService } from '../../services/chemical-elements.service';

@Component({
  selector: 'devon4ts-samples-element-details',
  templateUrl: './element-details.component.html',
  styleUrls: ['./element-details.component.scss'],
})
export class ElementDetailsComponent implements OnInit {
  element: PeriodicElement = {
    name: '',
    position: 0,
    weight: 0,
    symbol: '',
    description: '',
  };

  constructor(
    private route: ActivatedRoute,
    private chemicalElementsService: ChemicalElementsService
  ) {}

  ngOnInit() {
    this.getSelectedElement();
  }

  getSelectedElement(): void {
    const id = '' + this.route.snapshot.paramMap.get('id');
    this.chemicalElementsService
      .getElementAtPosition(parseInt(id))
      .subscribe((result) => (this.element = result));
    // TODO: replce this with the route parameter
  }
}
