import { BoneBase, Id } from './';

export interface BoneLong extends BoneBase<number> {
    minimum: number;
    maximum: number;
    step: number;
}
