import { Route } from '@angular/router';
import { ProductsComponent } from '@nx/products';
import { ScheduleComponent } from '@nx/schedule';
import { RecipesComponent } from '@nx/recipes';

export const appRoutes: Route[] = [
  { path: 'products', component: ProductsComponent },
  { path: 'recipes', component: RecipesComponent },
  { path: 'schedule', component: ScheduleComponent },
  { path: '**', redirectTo: 'recipes' },
];
