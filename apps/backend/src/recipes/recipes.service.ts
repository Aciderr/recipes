import { Injectable } from '@nestjs/common';
import { foodsData } from './foods.data';
import { Observable, of } from 'rxjs';
import { Recipe } from '@nx/util-recipes';

@Injectable()
export class RecipesService {
  getAll(): Observable<Recipe[]> {
    return of(foodsData);
  }
}
