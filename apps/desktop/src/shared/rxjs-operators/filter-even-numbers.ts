import { MonoTypeOperatorFunction } from 'rxjs';
import { filter } from 'rxjs/operators';

export function filterEvenNumbers(): MonoTypeOperatorFunction<number> {
  return filter((number) => number % 2 === 0);
}
