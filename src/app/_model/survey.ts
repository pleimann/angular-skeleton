import { Moment } from 'moment';

import { QuestionBase } from './';

export interface Survey {
    id: number;
    startDate: Moment;
    endDate: Moment;
    questions: QuestionBase<string|number>[];
}
