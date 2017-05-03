import { Moment } from 'moment';

import { Bone } from './';

export interface Survey {
    id: number;
    startDate: Moment;
    endDate: Moment;
    bones: Bone[];
}
