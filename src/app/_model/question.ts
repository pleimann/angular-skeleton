import { Id } from './';

export interface QuestionBase<V extends string | number> {
    id: Id;
    label: string;
    text?: string;
    value: V | null;
}

export type Question = QuestionBase<string | number>;
