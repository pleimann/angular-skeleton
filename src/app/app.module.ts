import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppMaterialModule } from './mat.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SurveyComponent } from './survey/survey.component';
import { RestService } from './_services/rest.service';

@NgModule({
    declarations: [
        AppComponent,
        SurveyComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        AppRoutingModule,
        AppMaterialModule
    ],
    providers: [RestService],
    bootstrap: [AppComponent]
})
export class AppModule { }
