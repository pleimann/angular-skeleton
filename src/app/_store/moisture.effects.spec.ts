import { TestBed, async, inject } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { MockBackend, MockConnection } from '@angular/http/testing';
import { BaseRequestOptions, Http, ResponseOptions, Response } from '@angular/http';
import { EffectsTestingModule, EffectsRunner } from '@ngrx/effects/testing';
import { Action, provideStore, Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import { MoistureEffects, MoistureActions, MockStore, LoadMoistureDataAction, moistureReducer } from './';
import { RestService, FeedsService } from '../_services';
import { MoistureState } from '../_model';

fdescribe('MoistureEffects', () => {
    let service;
    let effects;
    let effectsRunner;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [
                EffectsTestingModule,
            ],
            providers: [
                FeedsService,
                MoistureEffects,
                provideStore({ moistureReducer }),
                EffectsRunner,
            ],
        });

        service = TestBed.get(FeedsService);
        effects = TestBed.get(MoistureEffects);
        effectsRunner = TestBed.get(EffectsRunner);
    });

    describe('when an LOAD_MOISTURE_DATA is dispatched', () => {
        it('should dispatch LOAD_MOISTURE_DATA_SUCCESS if successful', () => {
            const fakeFeedsServiceSuccess = () => {
                return Observable.create((observer) => {
                    observer.next('great success');
                });
            };

            spyOn(service, 'post').and.callFake(fakeFeedsServiceSuccess);

            // effectsRunner.queue queues up actions in the store to get your effects to run
            effectsRunner.queue(LoadMoistureDataAction());
            effects.effects$.take(1).subscribe((action) => {
                expect(action).toEqual({
                    type: 'LOAD_MOISTURE_DATA_SUCCESS',
                    payload: 'great success'
                });
            });
        });

        it('should call feedsService.post with the correct parameters', () => {
            const fakeFeedsServiceSuccess = () => {
                return Observable.create((observer) => {
                    observer.next('great success');
                });
            };

            spyOn(service, 'post').and.callFake(fakeFeedsServiceSuccess);

            effectsRunner.queue(LoadMoistureDataAction());

            effects.effects$.take(1).subscribe((action) => {
                expect(service.post).toHaveBeenCalledWith('updated info');
            });
        });

        it('should dispatch LOAD_MOISTURE_DATA_FAILED if failed', () => {
            const fakeFeedsServiceFail = () => {
                return Observable.create((observer) => {
                    observer.error('error');
                });
            };

            spyOn(service, 'post').and.callFake(fakeFeedsServiceFail);

            effectsRunner.queue(LoadMoistureDataAction());
            effects.effects$.take(1).subscribe((action) => {
                expect(action).toEqual({
                    type: 'LOAD_MOISTURE_DATA_FAILED',
                    payload: 'error'
                });
            });
        });
    });
});

describe('App Effects', () => {
    let runner: EffectsRunner;
    let effects: MoistureEffects;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [
                EffectsTestingModule,
            ],
            providers: [
                MoistureEffects,
                BaseRequestOptions,
                MockBackend,
                FeedsService,
                EffectsRunner,
                {
                    provide: Http, useFactory: (backend: MockBackend, defaultOptions: BaseRequestOptions) => {
                        return new Http(backend, defaultOptions);
                    }, deps: [MockBackend, BaseRequestOptions]
                },
                { provide: Store, useValue: new MockStore<MoistureState>({}) }
            ],
        });

        effects = TestBed.get(MoistureEffects);
        runner = TestBed.get(EffectsRunner);
    });

    describe('Garden Action Effects', function () {
        beforeEach(inject([MockBackend], (backend: MockBackend) => {
            const baseResponse = new Response(new ResponseOptions({
                body: '{}',
                status: 200,
                statusText: 'OK'
            }));

            backend.connections.subscribe((connection: MockConnection) =>
                connection.mockRespond(baseResponse)
            );
        }));

        it('should respond with latest data', () => {
            effects.state$.subscribe((action: Action) => {
                expect(action.type).toBe('GET_MOISTURE_DATA_SUCCESS');
            });
        });

        it('should return a LOAD_MOISTURE_DATA_SUCCESS action after loading the data', () => {
            runner.queue(LoadMoistureDataAction());

            effects.state$.subscribe((result: Action) => {
                expect(result).toBeTruthy();
                expect(result.type).toEqual(MoistureActions.LOAD_MOISTURE_DATA_SUCCESS);
                // expect(result.payload).toEqual(jasmine.objectContaining({
                //     id: jasmine.any(Number)
                // }));
            });
        });
    });
});
