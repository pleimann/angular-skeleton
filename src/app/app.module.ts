import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SurveyComponent } from './survey/survey.component';
import { QuestionListComponent } from './question-list/question-list.component';
import { RestService } from './_services/rest.service';

@NgModule({
    declarations: [
        AppComponent,
        SurveyComponent,
        QuestionListComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        AppRoutingModule,
        BrowserAnimationsModule
    ],
    providers: [RestService],
    bootstrap: [AppComponent]
})
export class AppModule { }
