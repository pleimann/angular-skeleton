import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import { MoistureChartComponent } from '../moisture-chart';
import { BatteryComponent } from '../battery';
import { SignalComponent } from '../signal';
import { MoistureState, BatteryState, SignalState, AppState } from '../_model';

@Component({
    selector: 'mp-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent {
    moistureData: Observable<MoistureState>;
    batteryData: Observable<BatteryState>;
    signalData: Observable<SignalState>;

    constructor(private store: Store<AppState>) {
        this.moistureData = store.select('moisture');
        this.batteryData = store.select('battery');
        this.signalData = store.select('signal');
    }
}
