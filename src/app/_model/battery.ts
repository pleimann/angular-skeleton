import { Moment } from 'moment';

export interface BatteryLevel {
    value: number;
    timestamp: Moment;
}

export interface BatteryState {
    level: BatteryLevel[];
}
