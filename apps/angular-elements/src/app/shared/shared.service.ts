import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  name: any;
  description: any;

  constructor() {}

  createDish(name: any, description: any): void {
    this.name = name;
    this.description = description;
  }
}
