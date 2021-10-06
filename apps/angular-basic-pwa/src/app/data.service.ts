import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MY_THAI_STAR_DISH } from '../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private http: HttpClient) {}

  getDishes(): Observable<any> {
    return this.http.get(MY_THAI_STAR_DISH);
  }
}
