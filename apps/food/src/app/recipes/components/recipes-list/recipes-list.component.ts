import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  Signal,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { Recipe, RecipesFacadeService } from '@nx/recipes';
import { MatTableModule } from '@angular/material/table';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'fo-recipes-list',
  standalone: true,
  imports: [CommonModule, MatTableModule],
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RecipesListComponent {
  displayedColumns: string[] = ['name', 'preparationTimeInMinutes'];
  recipes: Signal<Recipe[] | undefined>;

  constructor(recipesFacadeService: RecipesFacadeService) {
    this.recipes = toSignal(recipesFacadeService.recipes$);
    recipesFacadeService.loadRecipes();
  }
}
