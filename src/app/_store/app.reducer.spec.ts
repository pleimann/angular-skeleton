import { TestBed, async, inject } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { EffectsTestingModule, EffectsRunner } from '@ngrx/effects/testing';
import { Observable } from 'rxjs/Observable';

import { AppEffects, AppActions, appReducer } from './';
import { RestService } from '../_services';

describe('App Reducer', () => {
    it('should return a LOAD_MOISTURE_DATA action after loading the scans', () => {
        expect(appReducer({ moisture: null }, { type: AppActions.LOAD_MOISTURE_DATA_SUCCESS, payload: [] }))
            .toEqual({ moisture: null });
    });
});
