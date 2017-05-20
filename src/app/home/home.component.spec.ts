/* tslint:disable:no-unused-variable */

import { APP_BASE_HREF } from '@angular/common';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { Store } from '@ngrx/store';

import { async, inject, ComponentFixture, TestBed } from '@angular/core/testing';

import { utc } from 'moment';

import { MoistureState } from '../_model';
import { MockStore } from '../_store';

import { HomeComponent } from './home.component';
import { AppMaterialModule } from '../app-material.module';
import { BatteryComponent } from 'app/battery';
import { WeatherComponent } from 'app/weather';
import { SignalComponent } from 'app/signal';
import { MoistureChartComponent } from 'app/moisture-chart';

describe('Component: Home', () => {
    let component: HomeComponent;
    let fixture: ComponentFixture<HomeComponent>;
    let mockStore: Store<MoistureState>;
    let de: DebugElement;
    let el: HTMLElement;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                HomeComponent,
                WeatherComponent,
                BatteryComponent,
                SignalComponent,
                MoistureChartComponent
            ],
            imports: [
                AppMaterialModule
            ],
            providers: [
                { provide: APP_BASE_HREF, useValue: '/' },
                { provide: Store, useValue: new MockStore<MoistureState>({}) }
            ]
        });
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(HomeComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();

        mockStore = fixture.debugElement.injector.get(Store);

        de = fixture.debugElement.query(By.css('div'));
        el = de.nativeElement;
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
