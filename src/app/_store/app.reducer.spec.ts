import { TestBed, async, inject } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { EffectsTestingModule, EffectsRunner } from '@ngrx/effects/testing';
import { Observable } from 'rxjs/Rx';

import { AppEffects, AppActions, appReducer } from './';
import { RestService } from '../_services';

describe('App Reducer', () => {
    it('should return a LOAD_SURVEYS action after loading the surveys', () => {
        expect(appReducer({ surveys: null }, { type: AppActions.LOAD_SURVEYS_SUCCESS, payload: [] }))
            .toEqual({ surveys: [] });
    });
});
