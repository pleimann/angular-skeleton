import { TestBed, async, inject } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { EffectsTestingModule, EffectsRunner } from '@ngrx/effects/testing';
import { Observable } from 'rxjs/Observable';

import { MoistureEffects, MoistureActions, moistureReducer, LoadMoistureDataSuccessAction } from './';
import { MoistureState } from '../_model';

describe('Moisture Reducer', () => {
    const payload: MoistureState = {
        'bed_one': { id: 1, name: 'bed_one', readings: [] }
    };

    it('should return a state with payload incorporated', () => {
        expect(moistureReducer({ }, LoadMoistureDataSuccessAction(payload)))
            .toEqual(jasmine.objectContaining(payload));
    });

    it('should return new object to ensure immutability', () => {
        expect(moistureReducer({ }, LoadMoistureDataSuccessAction(payload)))
            .not.toBe(payload);
    });
});
