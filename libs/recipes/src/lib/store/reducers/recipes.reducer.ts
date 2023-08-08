import { createReducer, on } from '@ngrx/store';
import { Recipe } from '../../models/recipe.interface';
import { loadFoodFailed, loadFoodSuccess } from '../actions/food.actions';

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
