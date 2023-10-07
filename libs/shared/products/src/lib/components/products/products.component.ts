import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { ProductWithAmount } from '@nx/shared/recipes/utils';
import { RecipesFacadeService } from '@nx/shared/recipes/data-access';

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
