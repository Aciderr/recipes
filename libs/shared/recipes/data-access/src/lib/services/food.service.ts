import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Recipe } from '@nx/shared/recipes/utils';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class FoodService {
  constructor(private httpClient: HttpClient) {}

  getFoods(): Observable<Recipe[]> {
    return this.httpClient.get<Recipe[]>('http://localhost:3000/api/recipes');
  }
}
