import { ActionReducer, Action } from '@ngrx/store';

import { AppActions } from './app.actions';
import { Survey } from 'app/_model';

interface AppState {
    surveys: Survey[];
}

const initialState: ReadonlyAppState = {
    surveys: []
};

type ReadonlyAppState = Readonly<AppState>;

export function appReducer(state: AppState = initialState, action: Action): ReadonlyAppState {
    let newState: AppState = state;

    switch (action.type) {
        case AppActions.LOAD_SURVEYS_SUCCESS:
            newState = {
                surveys: action.payload
            };

            break;

        case AppActions.LOAD_SURVEYS_FAILED:
            newState = {
                surveys: []
            };

            break;
    }

    return Object.freeze(newState);
}
