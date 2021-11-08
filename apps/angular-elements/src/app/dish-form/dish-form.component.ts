import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { SharedService } from '../shared/shared.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'devon4ts-samples-dish-form',
  templateUrl: './dish-form.component.html',
  styleUrls: ['./dish-form.component.css']
})
export class DishFormComponent implements OnInit {
  @Input() platename: any;

  @Input() platedescription: any;

  @Output()
  submitDishEvent = new EventEmitter();

  submitted = false;
  dish = { name: '', description: '' };

  constructor(public dishShareService: SharedService) {}

  ngOnInit() {
    this.dish.name = this.platename;
    this.dish.description = this.platedescription;
  }

  onSubmit(dishForm: NgForm): void {
    console.log('SUBMIT');
    console.log(dishForm.value);
    this.dishShareService.createDish(
      dishForm.value.name,
      dishForm.value.description
    );
    this.submitDishEvent.emit('dishSubmited');
  }
}
