import { Component, OnInit } from '@angular/core';
import { MoistureChartComponent } from '../moisture-chart';
import { BatteryComponent } from '../battery';

@Component({
    selector: 'mp-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

    constructor() { }

    ngOnInit() {
    }

}
