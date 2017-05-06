import { Moment } from 'moment';

export interface MoistureReading {
    value: number;
    timestamp: Moment;
}

export interface MoistureFeed {
    id: number;
    name: string;
    readings: MoistureReading[];
}

export interface MoistureState {
    [feedId: string]: MoistureFeed;
}
