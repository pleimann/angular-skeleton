import { TestBed, async, inject } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { EffectsTestingModule, EffectsRunner } from '@ngrx/effects/testing';
import { Action } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import { AppEffects, AppActions } from './';
import { RestService } from '../_services';

describe('App Effects', () => {
    beforeEach(() => TestBed.configureTestingModule({
        imports: [
            EffectsTestingModule
        ],
        providers: [
            AppEffects
        ]
    }));

    let runner: EffectsRunner;
    let appEffects: AppEffects;

    beforeEach(inject([ EffectsRunner, AppEffects ], (_runner, _authEffects) => {
        runner = _runner;
        appEffects = _authEffects;
    }));

    describe('Garden Action Effects', function () {
    beforeEachProviders(() => [
        BaseRequestOptions,
        MockBackend,
        EffectsTestingModule
        provide(Http, {
            useFactory: (backend: MockBackend, defaultOptions: BaseRequestOptions) => {
                return new Http(backend, defaultOptions);
            },
            deps: [ MockBackend, BaseRequestOptions ]
        })
    ]);

    beforeEach(inject([ MockBackend ], (backend: MockBackend) => {
        const baseResponse = new Response(new ResponseOptions({
            body: '{}',
            status: 200,
            statusText: 'OK'
        }));
        backend.connections.subscribe((connection: MockConnection) =>
            connection.mockRespond(baseResponse)
        );
    }));

    it('should respond with latest data',
        inject([ MockStateUpdates, MpMoistureEffects ], (updates: MockStateUpdates, moisture: MpMoistureEffects) => {
        moisture.data$.subscribe((action: Action) => {
                expect(action.type).toBe('GET_MOISTURE_DATA_SUCCESS');
            });
        })
    );

    it('should return a LOAD_GEOGRAPHIC_LOCATIONS_SUCCESS action after loading the locations', () => {
        runner.queue({ type: AppActions.LOAD_SURVEYS });

        appEffects.surveys$.subscribe((result: Action) => {
            expect(result).toBeTruthy();
            expect(result.type).toEqual(AppActions.LOAD_SURVEYS_SUCCESS);
            // expect(result.payload).toEqual(jasmine.objectContaining({
            //     id: jasmine.any(Number)
            // }));
        });
    });
});
