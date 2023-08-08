import { Route } from '@angular/router';
import { RecipesListComponent } from './recipes/components/recipes-list/recipes-list.component';
import { ProductsComponent } from './recipes/components/products/products.component';
import { ScheduleComponent } from './recipes/components/schedule/schedule.component';

export const appRoutes: Route[] = [
  { path: 'products', component: ProductsComponent },
  { path: 'recipes', component: RecipesListComponent },
  { path: 'schedule', component: ScheduleComponent },
  { path: '**', redirectTo: 'recipes' },
];
