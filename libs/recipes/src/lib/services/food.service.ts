import { Injectable } from '@angular/core';
import { asyncScheduler, Observable, observeOn, of } from 'rxjs';
import { Recipe } from '../models/recipe.interface';
import { foodsData } from '../services/foods.data';

@Injectable({
  providedIn: 'root',
})
export class FoodService {
  getFoods(): Observable<Recipe[]> {
    return of(foodsData).pipe(observeOn(asyncScheduler));
  }
}
