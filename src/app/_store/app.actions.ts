import { Action } from '@ngrx/store';
import { Enum } from 'typescript-string-enums';

import { MoistureState } from 'app/_model';

export const AppActions = Enum(
    'LOAD_MOISTURE_DATA', 'LOAD_MOISTURE_DATA_SUCCESS', 'LOAD_MOISTURE_DATA_FAILED'
);
export type AppActions = Enum<typeof AppActions>;

/**
 * Load moisture data
 */
export const LoadMoistureDataAction = (): Action => ({
    type: AppActions.LOAD_MOISTURE_DATA
});

export const LoadMoistureDataSuccessAction = (moisture: MoistureState): Action => ({
    type: AppActions.LOAD_MOISTURE_DATA_SUCCESS,
    payload: moisture
});

export const LoadMoistureDataFailAction = (error: Error) => ({
    type: AppActions.LOAD_MOISTURE_DATA_FAILED,
    payload: error
});
