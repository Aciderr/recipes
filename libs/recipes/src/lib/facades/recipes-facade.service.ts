import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Recipe } from '../models/recipe.interface';
import {
  selectProducts,
  selectRecipes,
} from '../store/selectors/recipes.selectors';
import { loadFood } from '../store/actions/food.actions';
import { ProductWithAmount } from '../models/product-with-amount.interface';

@Injectable({
  providedIn: 'root',
})
export class RecipesFacadeService {
  constructor(private store: Store) {}

  get recipes$(): Observable<Recipe[]> {
    return this.store.select(selectRecipes);
  }

  get products$(): Observable<ProductWithAmount[]> {
    return this.store.select(selectProducts);
  }

  loadRecipes(): void {
    this.store.dispatch(loadFood());
  }
}
