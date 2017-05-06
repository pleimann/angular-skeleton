import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppMaterialModule } from './mat.module';
import { AppRoutingModule } from './app-routing.module';
import { RestService } from './_services/rest.service';
import { AppComponent } from './app.component';
import { HomeComponent } from './home';
import { DataComponent } from './data';
import { AboutComponent } from './about';
import { WeatherComponent } from './weather';
import { FeedListComponent, FeedDetailComponent } from './feeds';

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        DataComponent,
        AboutComponent,
        WeatherComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        AppRoutingModule,
        AppMaterialModule,
    ],
    providers: [ RestService ],
    bootstrap: [ AppComponent ]
})
export class AppModule { }
