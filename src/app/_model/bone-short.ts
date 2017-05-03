import { BoneBase, Id } from './';

export interface BoneShort extends BoneBase<string> {
    choices: string[];
}
