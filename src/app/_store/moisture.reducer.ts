import { ActionReducer, Action } from '@ngrx/store';

import { MoistureActions } from './moisture.actions';
import { MoistureState, SignalState, BatteryState } from '../_model';

export function moistureReducer(state: MoistureState = {}, action: Action): Readonly<MoistureState> {
    let newState: MoistureState = state;

    switch (action.type) {
        case MoistureActions.LOAD_MOISTURE_DATA_SUCCESS:
            newState = {
                ...state,
                ...action.payload
            };

            break;

        case MoistureActions.LOAD_MOISTURE_DATA_FAILED:
            newState = {
                ...state,
            };

            break;

        default:
            return state;
    }

    return Object.freeze(newState);
}