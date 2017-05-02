import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Actions, Effect, toPayload } from '@ngrx/effects';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/switchMap';

import { AppActions, LoadSurveysSuccessAction, LoadSurveysFailAction } from './';
import { DataFactory } from './app-data.factory';
import { Survey } from 'app/_model';

@Injectable()
export class AppEffects {
    @Effect() surveys$ = this.actions$
        // Listen for the 'LOAD_SURVEYS' action
        .ofType(AppActions.LOAD_SURVEYS)
        .map(toPayload)
        .map((data: Survey[]) => LoadSurveysSuccessAction([DataFactory.randomSurvey()]))
        // .switchMap((request: any, i: number) =>
        //     this.restService.getAllLocations()
        //         // If successful, dispatch success action with result
        //         .map((data: Survey[]) => LoadSurveysSuccessAction(data))
        //         // If request fails, dispatch failed action
        //         .catch((e: Error) => Observable.of(LoadSurveysFailAction(e)))
        // )
        ;

    constructor(private actions$: Actions) { }
}
