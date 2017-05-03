import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/observable/of';

import { Id, Survey, Bone, BoneLong, BoneShort, BoneFlat, Scan, Patient } from '../_model';
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
            bones: DataFactory.randomQuestions()
        };
    }

    public static randomQuestions(count: number = Math.random()): Array<Bone> {
        const questions: Array<Bone> = [];
        for (let i = 0; i < count; i++) {
            questions.push(this.randomQuestion());
        }

        return questions;
    }

    public static randomQuestion(): Bone {
        const randomQuestion: Bone = {
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
