import { QuestionBase, Id } from './';

export interface QuestionChoice extends QuestionBase<string> {
    choices: string[];
}
