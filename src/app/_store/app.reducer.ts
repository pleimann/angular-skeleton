import { ActionReducer, Action } from '@ngrx/store';

import { AppActions } from './app.actions';
import { MoistureState, SignalState, BatteryState } from '../_model';

export interface AppState {
    moisture: MoistureState;
    signal: SignalState;
    battery: BatteryState;
}

const initialState: ReadonlyAppState = {
    moisture: null,
    signal: null,
    battery: null
};

type ReadonlyAppState = Readonly<AppState>;

export function appReducer(state: AppState = initialState, action: Action): ReadonlyAppState {
    let newState: AppState = state;

    switch (action.type) {
        case AppActions.LOAD_MOISTURE_DATA_SUCCESS:
            newState = {
                ...state,
                moisture: action.payload
            };

            break;

        case AppActions.LOAD_MOISTURE_DATA_FAILED:
            newState = {
                ...state,
                moisture: null
            };

            break;

        default:
            return state;
    }

    return Object.freeze(newState);
}
