import { createReducer, on } from '@ngrx/store';
import { loadFoodFailed, loadFoodSuccess } from '../actions/food.actions';
import { Recipe } from '@nx/util-recipes';

export interface RecipesState {
  recipes: Recipe[];
}

export const initialState: RecipesState = {
  recipes: [],
};

export const recipesReducer = createReducer(
  initialState,
  on(loadFoodSuccess, (state, { foods }) => {
    return {
      ...state,
      recipes: foods,
    };
  }),
  on(loadFoodFailed, (state) => {
    return {
      ...state,
    };
  })
);
