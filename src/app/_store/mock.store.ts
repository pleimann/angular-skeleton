import { Observable, Subject, BehaviorSubject } from 'rxjs/Rx';
import { map } from 'rxjs/operator/map';
import { Action } from '@ngrx/store';

export class MockStore<T> extends BehaviorSubject<T> {
    dispatch = (action: Action): void => {
    }

    select = <T, R>(pathOrMapFn: any, ...paths: string[]): Subject<R> => {
        return map.call(this, pathOrMapFn);
    }
}
