import { Action } from '@ngrx/store';

import { MoistureState } from 'app/_model';

export enum MoistureActions {
    LOAD_MOISTURE_DATA = 'LOAD_MOISTURE_DATA',
    LOAD_MOISTURE_DATA_SUCCESS = 'LOAD_MOISTURE_DATA_SUCCESS',
    LOAD_MOISTURE_DATA_FAILED = 'LOAD_MOISTURE_DATA_FAILED',
}

/**
 * Load moisture data
 */
export const LoadMoistureDataAction = (): Action => ({
    type: MoistureActions.LOAD_MOISTURE_DATA
});

export const LoadMoistureDataSuccessAction = (moisture: MoistureState): Action => ({
    type: MoistureActions.LOAD_MOISTURE_DATA_SUCCESS,
    payload: moisture
});

export const LoadMoistureDataFailAction = (error: Error) => ({
    type: MoistureActions.LOAD_MOISTURE_DATA_FAILED,
    payload: error
});