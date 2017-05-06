import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/observable/of';

import { Id, MoistureState, MoistureFeed, MoistureReading } from '../_model';
import { Moment, utc } from 'moment';

export class DataFactory {
    public static randomMoistureState(count: number = 5): MoistureState {
        const feeds: MoistureFeed[] = DataFactory.randomFeeds(5);

        return feeds.reduce((state: MoistureState, feed: MoistureFeed) => {
            state[feed.name] = feed;
            return state;

        }, {} as MoistureState);
    }

    public static randomFeeds(count: number = 5): MoistureFeed[] {
        const feeds: MoistureFeed[] = [];
        for (let i = 0; i < count; i++) {
            feeds.push(DataFactory.randomFeed());
        }

        return feeds;
    }

    public static randomFeed(): MoistureFeed {
        const readings = DataFactory.randomReadings();

        return {
            id: DataFactory.randomId(),
            name: DataFactory.randomString(20),
            readings: readings
        };
    }

    public static randomReadings(count: number = DataFactory.randomInteger()): MoistureReading[] {
        const readings: MoistureReading[] = [];
        for (let i = 0; i < count; i++) {
            readings.push(this.randomReading());
        }

        return readings;
    }

    public static randomReading(): MoistureReading {
        const randomReading: MoistureReading = {
            value: Math.random(),
            timestamp: utc()
        };

        return randomReading;
    }

    public static randomId(): Id {
        return Math.round(Math.random() * 1000);
    }

    public static randomInteger(): number {
        return Math.round((Math.random() * 100));
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
