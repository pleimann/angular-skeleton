import { Patient } from './';
import { Moment } from 'moment';

export interface Scan {
    respondent: Patient;
    date: Moment;
}
