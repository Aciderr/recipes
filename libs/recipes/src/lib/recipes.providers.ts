import { provideState, provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';

import { recipesReducer } from './store/reducers/recipes.reducer';
import { FoodEffects } from './store/effects/food.effects';

export const recipesProviders = [
  provideStore(),
  provideState('recipes', recipesReducer),
  provideEffects(FoodEffects),
];
