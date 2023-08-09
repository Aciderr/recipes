import { ChangeDetectionStrategy, Component, Signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecipesFacadeService } from '@nx/recipes-data';
import { MatTableModule } from '@angular/material/table';
import { toSignal } from '@angular/core/rxjs-interop';
import { Recipe } from '@nx/util-recipes';

@Component({
  selector: 'nx-recipes',
  standalone: true,
  imports: [CommonModule, MatTableModule],
  templateUrl: './recipes.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RecipesComponent {
  displayedColumns: string[] = ['name', 'preparationTimeInMinutes'];
  recipes: Signal<Recipe[] | undefined>;

  constructor(recipesFacadeService: RecipesFacadeService) {
    this.recipes = toSignal(recipesFacadeService.recipes$);
    recipesFacadeService.loadRecipes();
  }
}
