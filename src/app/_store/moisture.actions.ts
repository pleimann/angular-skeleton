import { Action } from '@ngrx/store';
import { Enum } from 'typescript-string-enums';

import { MoistureState } from 'app/_model';

export const MoistureActions = Enum(
    'LOAD_MOISTURE_DATA', 'LOAD_MOISTURE_DATA_SUCCESS', 'LOAD_MOISTURE_DATA_FAILED'
);
export type MoistureActions = Enum<typeof MoistureActions>;

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