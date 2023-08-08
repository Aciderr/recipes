import { TestBed } from '@angular/core/testing';
import { RecipesFacadeService } from 'lib/store/facades/recipes-facade.service';

describe('RecipesService', () => {
  let service: RecipesFacadeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RecipesFacadeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
