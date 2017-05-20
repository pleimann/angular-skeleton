import { MoistureState, BatteryState, SignalState } from './';

export interface AppState {
    moisture: MoistureState;
    battery: BatteryState;
    signal: SignalState;
}
