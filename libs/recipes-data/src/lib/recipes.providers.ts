import { provideState, provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';

import { recipesReducer } from './store/reducers/recipes.reducer';
import { FoodEffects } from './store/effects/food.effects';
import { provideHttpClient } from '@angular/common/http';

export const recipesProviders = [
  provideHttpClient(),
  provideStore(),
  provideState('recipes', recipesReducer),
  provideEffects(FoodEffects),
];
