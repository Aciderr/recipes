import { Route } from '@angular/router';
import { ProductsComponent } from '@nx/shared/products';
import { ScheduleComponent } from '@nx/shared/schedule';
import { RecipesComponent } from '@nx/shared/recipes/feature';

export const appRoutes: Route[] = [
  { path: 'products', component: ProductsComponent },
  { path: 'recipes', component: RecipesComponent },
  { path: 'schedule', component: ScheduleComponent },
  { path: '**', redirectTo: 'recipes' },
];
