import { TestScheduler } from 'rxjs/testing';
import { filterEvenNumbers } from './filter-even-numbers';

describe('filterEvenNumbers', () => {
  let scheduler: TestScheduler;

  beforeEach(() => {
    scheduler = new TestScheduler((actual, expected) => {
      expect(actual).toEqual(expected);
    });
  });

  it('should allow even numbers', () => {
    scheduler.run(({ cold, expectObservable }) => {
      const source$ = cold('1ms a 2ms |', { a: 6 });
      const expected$ = '   1ms z 2ms |';

      const result$ = source$.pipe(filterEvenNumbers());

      expectObservable(result$).toBe(expected$, { z: 6 });
    });
  });

  it('should not allow odd numbers', () => {
    scheduler.run(({ cold, expectObservable }) => {
      const source$ = cold('1ms a 2ms |', { a: 7 });
      const expected$ = '   1ms - 2ms |';

      const result$ = source$.pipe(filterEvenNumbers());

      expectObservable(result$).toBe(expected$);
    });
  });
});
