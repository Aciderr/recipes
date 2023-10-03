import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, exhaustMap, map, of } from 'rxjs';
import {
  loadFood,
  loadFoodFailed,
  loadFoodSuccess,
} from '../../store/actions/food.actions';
import { FoodService } from '../../services/food.service';

@Injectable()
export class FoodEffects {
  loadFoods$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadFood),
      exhaustMap(() =>
        this.foodService.getFoods().pipe(
          map((foods) => {
            return loadFoodSuccess({ foods });
          }),
          catchError(() => {
            return of(loadFoodFailed());
          })
        )
      )
    )
  );

  constructor(private actions$: Actions, private foodService: FoodService) {}
}
