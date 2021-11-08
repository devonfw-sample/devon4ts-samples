import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared/shared.service';

@Component({
  selector: 'devon4ts-samples-dishview',
  templateUrl: './dishview.component.html',
  styleUrls: ['./dishview.component.css']
})
export class DishViewComponent implements OnInit {
  dishname: any;
  dishdescription: any;

  constructor(public dishShareService: SharedService) {}

  ngOnInit() {
    this.dishname = this.dishShareService.name;
    this.dishdescription = this.dishShareService.description;
  }
}
