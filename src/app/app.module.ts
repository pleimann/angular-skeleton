import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { LineChartModule, GaugeModule } from '@swimlane/ngx-charts';

import { AppMaterialModule } from './mat.module';
import { AppRoutingModule } from './app-routing.module';
import { RestService } from './_services/rest.service';
import { AppComponent } from './app.component';
import { HomeComponent } from './home';
import { DataComponent } from './data';
import { AboutComponent } from './about';
import { WeatherComponent } from './weather';
import { MoistureChartComponent } from './moisture-chart';
import { FeedListComponent, FeedDetailComponent } from './feeds';
import { BatteryComponent } from './battery/battery.component';

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
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        AppRoutingModule,
        AppMaterialModule,
        LineChartModule,
        GaugeModule,
    ],
    providers: [ RestService ],
    bootstrap: [ AppComponent ]
})
export class AppModule { }
