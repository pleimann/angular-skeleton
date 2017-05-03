import { Id } from './';

export interface BoneBase<V extends string | number> {
    id: Id;
    label: string;
    text?: string;
    value: V | null;
}

export type Bone = BoneBase<string | number>;
