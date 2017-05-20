import { Moment } from 'moment';

export interface SignalReading {
    value: number;
    timestamp: Moment;
}

export interface SignalState {
    readings: SignalReading[];
}
