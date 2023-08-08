import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { ProductWithAmount, RecipesFacadeService } from '@nx/recipes';

@Component({
  selector: 'fo-products',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductsComponent {
  products$: Observable<ProductWithAmount[]>;

  constructor(recipesFacadeService: RecipesFacadeService) {
    this.products$ = recipesFacadeService.products$;
    recipesFacadeService.loadRecipes();
  }
}
