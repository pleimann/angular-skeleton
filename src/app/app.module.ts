import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { LineChartModule, GaugeModule } from '@swimlane/ngx-charts';

import { AppStoreModule } from './_store';
import { RestService, FeedsService } from './_services';

import { AppMaterialModule } from './app-material.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home';
import { DataComponent } from './data';
import { AboutComponent } from './about';
import { WeatherComponent } from './weather';
import { MoistureChartComponent } from './moisture-chart';
import { FeedListComponent, FeedDetailComponent } from './feeds';
import { BatteryComponent } from './battery';
import { SignalComponent } from './signal';

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        DataComponent,
        AboutComponent,
        WeatherComponent,
        MoistureChartComponent,
        FeedDetailComponent,
        FeedListComponent,
        BatteryComponent,
        SignalComponent,
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        AppRoutingModule,
        AppMaterialModule,
        AppStoreModule,
        LineChartModule,
        GaugeModule,
    ],
    providers: [ RestService ],
    bootstrap: [ AppComponent ]
})
export class AppModule { }
