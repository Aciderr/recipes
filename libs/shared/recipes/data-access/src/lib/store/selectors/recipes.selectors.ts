import { createFeatureSelector, createSelector } from '@ngrx/store';
import { RecipesState } from '../../store/reducers/recipes.reducer';
import { ProductWithAmount } from '@nx/shared/recipes/utils';

const selectRecipesFeature =
  createFeatureSelector<Readonly<RecipesState>>('recipes');

export const selectRecipes = createSelector(selectRecipesFeature, (recipes) => {
  return recipes.recipes;
});

export const selectRecipesUnderPreparationTime = (
  preparationTimeInMinutes: number
) =>
  createSelector(selectRecipesFeature, (recipes) => {
    return recipes.recipes.filter(
      (recipe) => recipe.preparationTimeInMinutes < preparationTimeInMinutes
    );
  });

export const selectProducts = createSelector(
  selectRecipesFeature,
  (recipes) => {
    const products: Record<string, ProductWithAmount> = {};
    recipes.recipes.map((recipe) => {
      const recipeProducts = [...recipe.products];
      recipeProducts.forEach((product) => {
        if (products[product.id]) {
          products[product.id] = {
            ...products[product.id],
            amount: products[product.id].amount + 1,
          };
        } else {
          products[product.id] = { ...product };
        }
      });
    });
    return Object.values(products);
  }
);
