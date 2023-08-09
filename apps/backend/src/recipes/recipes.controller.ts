import { Controller, Get } from '@nestjs/common';
import { Observable } from 'rxjs';
import { RecipesService } from './recipes.service';
import { Recipe } from '@nx/util-recipes';

@Controller('recipes')
export class RecipesController {
  constructor(private recipesService: RecipesService) {}

  @Get()
  getAll(): Observable<Recipe[]> {
    return this.recipesService.getAll();
  }
}
