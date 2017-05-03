import { BoneBase, Id } from './';

export interface BoneFlat extends BoneBase<number> {
    minimum: number;
    maximum: number;
    step: number;
}
