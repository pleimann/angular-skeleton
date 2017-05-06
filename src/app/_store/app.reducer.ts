import { ActionReducer, Action } from '@ngrx/store';

import { AppActions } from './app.actions';
import { MoistureState } from '../_model';

interface AppState {
    moisture: MoistureState;
}

const initialState: ReadonlyAppState = {
    moisture: null
};

type ReadonlyAppState = Readonly<AppState>;

export function appReducer(state: AppState = initialState, action: Action): ReadonlyAppState {
    let newState: AppState = state;

    switch (action.type) {
        case AppActions.LOAD_MOISTURE_DATA_SUCCESS:
            newState = {
                moisture: action.payload
            };

            break;

        case AppActions.LOAD_MOISTURE_DATA_FAILED:
            newState = {
                moisture: null
            };

            break;

        default:
            return state;
    }

    return Object.freeze(newState);
}
