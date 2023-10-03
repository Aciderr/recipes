import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Action } from '@ngrx/store';
import { Observable } from 'rxjs';
import { TestScheduler } from 'rxjs/testing';
import { FoodService } from 'lib/services/food.service';
import { FoodEffects } from 'lib/store/effects/food.effects';
import {
  loadFood,
  loadFoodFailed,
  loadFoodSuccess,
} from 'lib/store/actions/food.actions';
import { Recipe } from 'lib/models/recipe.interface';

const mockFoods: Recipe[] = [
  { id: '1', name: 'Jajka po benedyktyńsku', preparationTimeInMinutes: 30 },
  { id: '1', name: 'Spaghetti', preparationTimeInMinutes: 45 },
];

class FoodServiceMock implements Partial<FoodService> {
  getFoods = jest.fn();
}

describe('Foods Effects', () => {
  let scheduler: TestScheduler;
  let foodEffects: FoodEffects;
  let actions$: Observable<Action>;
  let foodService: FoodServiceMock;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        FoodEffects,
        provideMockActions(() => actions$),
        {
          provide: FoodService,
          useClass: FoodServiceMock,
        },
      ],
    });

    scheduler = new TestScheduler((actual, expected) => {
      expect(actual).toEqual(expected);
    });

    foodEffects = TestBed.inject(FoodEffects);
    foodService = TestBed.inject(FoodService) as FoodServiceMock;
  });

  describe('loadCars$', () => {
    describe('When fetch succeeds', () => {
      it('should return LoadCarsSuccess action', () => {
        scheduler.run(({ hot, cold, expectObservable }) => {
          actions$ = hot('5ms a', { a: loadFood });
          foodService.getFoods.mockReturnValue(cold('1s k|', { k: mockFoods }));

          const expected$ = '5ms 1s z';

          expectObservable(foodEffects.loadFoods$).toBe(expected$, {
            z: loadFoodSuccess({ foods: mockFoods }),
          });
        });
      });
    });

    describe('When fetch fails', () => {
      it('should return LoadCarsFailure action', () => {
        scheduler.run(({ hot, cold, expectObservable }) => {
          actions$ = hot('5ms a', { a: loadFood });
          foodService.getFoods.mockReturnValue(cold('1s #'));

          const expected$ = '5ms 1s z';

          expectObservable(foodEffects.loadFoods$).toBe(expected$, {
            z: loadFoodFailed,
          });
        });
      });
    });
  });
});
