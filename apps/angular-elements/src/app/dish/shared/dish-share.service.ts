import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DishShareService {
  name = '';
  description = '';

  createDish(name: string, description: string): void {
    this.name = name;
    this.description = description;
  }
}
