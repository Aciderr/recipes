import { TestScheduler } from 'rxjs/testing';

import { debouncedUnique } from './debounced-unique';

describe('debouncedUnique', () => {
  let scheduler: TestScheduler;

  beforeEach(() => {
    scheduler = new TestScheduler((actual, expected) => {
      expect(actual).toEqual(expected);
    });
  });

  it('should consider only the last value within debounce time', () => {
    scheduler.run(({ cold, expectObservable }) => {
      const source$ = cold('1ms a 1ms b 2s |', { a: 'React', b: 'Angular' });
      const expected$ = '   1ms - 1ms 500ms z 1500ms |';

      const result$ = source$.pipe(debouncedUnique(500));

      expectObservable(result$).toBe(expected$, { z: 'Angular' });
    });
  });

  it('should neglect repeated value', () => {
    scheduler.run(({ cold, expectObservable }) => {
      const source$ = cold('1ms a 1s b 2s |', { a: 'Angular', b: 'Angular' });
      const expected$ = '   1ms 500ms z 2501ms |';

      const result$ = source$.pipe(debouncedUnique(500));

      expectObservable(result$).toBe(expected$, { z: 'Angular' });
    });
  });
});
