import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { ProductWithAmount } from '@nx/util-recipes';
import { RecipesFacadeService } from '@nx/recipes-data';

@Component({
  selector: 'nx-products',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './products.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductsComponent {
  products$: Observable<ProductWithAmount[]>;

  constructor(recipesFacadeService: RecipesFacadeService) {
    this.products$ = recipesFacadeService.products$;
    recipesFacadeService.loadRecipes();
  }
}
