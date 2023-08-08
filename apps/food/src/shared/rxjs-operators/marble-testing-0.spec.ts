import { TestBed } from '@angular/core/testing';
import {TestScheduler} from "rxjs/internal/testing/TestScheduler";

const scheduler = new TestScheduler((actual, expected) => {
    expect(actual).toEqual(expected);
});

describe('Marble testing', () => {
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [],
        }).compileComponents();
    });

    it('should work', () => {
        scheduler.run(helpers => {
            const { cold, expectObservable } = helpers;
            const source$ =  cold('-a-|', {a: 'foo'});
            const expected$ = '    -z-|';

            expectObservable(source$).toBe(expected$, {z: 'foo'});
        });
    });
});
