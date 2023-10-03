import { MonoTypeOperatorFunction } from 'rxjs';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';

export function debouncedUnique<T>(time: number): MonoTypeOperatorFunction<T> {
  return (source$) => source$.pipe(debounceTime(time), distinctUntilChanged());
}
