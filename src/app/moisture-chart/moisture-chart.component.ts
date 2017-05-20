import { Component, AfterViewInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import {
    TdDataTableSortingOrder, TdDataTableService, ITdDataTableSortChangeEvent,
    TdDigitsPipe, IPageChangeEvent
} from '@covalent/core';

import { moistureData } from './data';

@Component({
    selector: 'mp-moisture-chart',
    templateUrl: './moisture-chart.component.html',
    styleUrls: ['./moisture-chart.component.scss'],
})
export class MoistureChartComponent {
    data: any[];

    // Generic Chart options
    showXAxis = true;
    showYAxis = true;
    gradient = true;
    autoScale = false;
    showLegend = true;
    showXAxisLabel = false;
    showYAxisLabel = false;
    xAxisLabel = 'Time';
    yAxisLabel = 'Moisture';

    colorScheme: any = {
        domain: [
            '#01579B', '#0091EA',
        ],
    };

    constructor() {
        this.data = moistureData;
    }

    // ngx transform using covalent digits pipe
    axisDigits(val: any): any {
        return new TdDigitsPipe().transform(val);
    }
}
