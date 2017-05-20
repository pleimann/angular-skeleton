import { Observable, Subject, BehaviorSubject, Observer } from 'rxjs/Rx';

import { map } from 'rxjs/operator/map';
import { pluck } from 'rxjs/operator/pluck';
import { distinctUntilChanged } from 'rxjs/operator/distinctUntilChanged';

import { Action, Store } from '@ngrx/store';

export class MockStore<T> extends BehaviorSubject<T> {
    private _dispatcher: Observer<Action>;

    dispatch = (action: Action): void => {
        this._dispatcher.next(action);
    }

    select = <T, R>(pathOrMapFn: any, ...paths: string[]): Subject<R> => {
        let mapped$: Observable<R>;

        if (typeof pathOrMapFn === 'string') {
            mapped$ = pluck.call(this, pathOrMapFn, ...paths);

        } else if (typeof pathOrMapFn === 'function') {
            mapped$ = map.call(this, pathOrMapFn);

        } else {
            throw new TypeError(`Unexpected type ${typeof pathOrMapFn} in select operator,`
                + ` expected 'string' or 'function'`);
        }

        return distinctUntilChanged.call(mapped$);
    }
}
