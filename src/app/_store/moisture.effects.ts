import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Actions, Effect, toPayload } from '@ngrx/effects';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/switchMap';

import { DataFactory } from './app-data.factory';
import { MoistureState } from '../_model';
import { RestService } from '../_services';
import { MoistureActions, LoadMoistureDataSuccessAction, LoadMoistureDataFailAction } from '../_store';

@Injectable()
export class MoistureEffects {
    @Effect() state$ = this.actions$
        // Listen for the 'LOAD_MOISTURE_DATA' action
        .ofType(MoistureActions.LOAD_MOISTURE_DATA)
        .map(toPayload)
        .map((data: MoistureState) => LoadMoistureDataSuccessAction(DataFactory.randomMoistureState()))
        // .switchMap((request: any, i: number) =>
        //     this.restService.get()
        //         // If successful, dispatch success action with result
        //         .map((data: MoistureState) => LoadMoistureDataSuccessAction(data))
        //         // If request fails, dispatch failed action
        //         .catch((e: Error) => Observable.of(LoadMoistureDataFailAction(e)))
        // )
        ;

    constructor(private actions$: Actions, private restService: RestService) { }
}
