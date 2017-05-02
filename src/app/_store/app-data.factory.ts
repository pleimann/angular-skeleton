import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/observable/of';

import { Id, Survey, Question, QuestionChoice, QuestionRange, Response, Respondent } from '../_model';
import { Moment, utc } from 'moment';

export class DataFactory {
    public static randomSurveys(count: number = 5): Survey[] {
        const surveys: Array<Survey> = [];
        for (let i = 0; i < count; i++) {
            surveys.push(this.randomSurvey());
        }

        return surveys;
    }

    public static randomSurvey(): Survey {
        return {
            id: DataFactory.randomId(),
            startDate: DataFactory.randomDate(-10),
            endDate: DataFactory.randomDate(10),
            questions: DataFactory.randomQuestions()
        };
    }

    public static randomQuestions(count: number = Math.random()): Array<Question> {
        const questions: Array<Question> = [];
        for (let i = 0; i < count; i++) {
            questions.push(this.randomQuestion());
        }

        return questions;
    }

    public static randomQuestion(): Question {
        const randomQuestion: Question = {
            id: DataFactory.randomId(),
            label: DataFactory.randomString(15),
            text: '',
            value: null
        };

        return randomQuestion;
    }

    public static randomId(): Id {
        return Math.round(Math.random() * 1000);
    }

    public static randomDate(bound: number = 10): Moment {
        return utc().add(Math.random() * bound, 'days');
    }

    public static randomString(stringLength: number = 10): string {
        const alpha = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
        let randomString = '';
        for (let iter = 0; iter < stringLength; iter++) {
            randomString = randomString + alpha.charAt(Math.floor(Math.random() * alpha.length));
        }

        return randomString;
    }
}
