import { RecipesState } from '../reducers/recipes.reducer';
import {
  selectRecipes,
  selectRecipesUnderPreparationTime,
} from '../selectors/recipes.selectors';

describe('Recipes selectors', () => {
  const initialState: RecipesState = {
    recipes: [
      { id: '1', name: 'Jajka po benedyktyńsku', preparationTimeInMinutes: 30 },
      { id: '1', name: 'Spaghetti', preparationTimeInMinutes: 45 },
    ],
  };

  it('should select all recipes', () => {
    const result = selectRecipes.projector(initialState);
    expect(result.length).toEqual(2);
  });

  it('should select all recipes with preparation time under 30 minutes', () => {
    const result =
      selectRecipesUnderPreparationTime(40).projector(initialState);
    expect(result.length).toEqual(1);
  });
});
