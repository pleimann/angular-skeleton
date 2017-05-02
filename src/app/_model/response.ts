import { Respondent } from './';
import { Moment } from 'moment';

export interface Response {
    respondent: Respondent;
    date: Moment;
}
