import { Action } from '@ngrx/store';
import { Enum } from 'typescript-string-enums';

import { Survey } from 'app/_model';

export const AppActions = Enum('LOAD_SURVEYS', 'LOAD_SURVEYS_SUCCESS', 'LOAD_SURVEYS_FAILED');
export type AppActions = Enum<typeof AppActions>;

/**
 * Load Surveys data
 */
export const LoadSurveysAction = (): Action => ({
    type: AppActions.LOAD_SURVEYS
});

export const LoadSurveysSuccessAction = (surveys: Survey[]): Action => ({
    type: AppActions.LOAD_SURVEYS_SUCCESS,
    payload: surveys
});

export const LoadSurveysFailAction = (error: Error) => ({
    type: AppActions.LOAD_SURVEYS_FAILED,
    payload: error
});
