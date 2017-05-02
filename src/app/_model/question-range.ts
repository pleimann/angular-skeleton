import { QuestionBase, Id } from './';

export interface QuestionRange extends QuestionBase<number> {
    minimum: number;
    maximum: number;
    step: number;
}
