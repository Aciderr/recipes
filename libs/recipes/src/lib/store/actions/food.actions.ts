import { createAction, props } from '@ngrx/store';

export const loadFood = createAction('[Food] Load foods');

export const loadFoodSuccess = createAction(
  '[Food] Load foods success',
  props<{ foods: any[] }>()
);

export const loadFoodFailed = createAction('[Food] Load foods failed');
