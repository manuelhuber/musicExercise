import {Injectable} from '@angular/core';

export const MINIMUM_DIFFICULTY : number = 1;
export const FINGER_CONTROL_MAX : number = 5;

export interface ExerciseDifficulty {
  fingerControl : number;
  intervals : number;
}

@Injectable()
export class ExerciseService {

  private difficulty : ExerciseDifficulty = ExerciseService.getDefaultDifficulty();

  setFingerControlDifficulty (difficulty : number) : void {
    this.difficulty.fingerControl =
      difficulty < 1 ? 1 :
        difficulty > 5 ? 5 :
          difficulty;
  }

  setIntervalsDifficulty (difficulty : number) : void {
    this.difficulty.intervals =
      difficulty < 1 ? 1 :
        difficulty > 11 ? 11 :
          difficulty;
  }

  getDifficulty () : ExerciseDifficulty {
    return this.difficulty;
  }

  static getDefaultDifficulty () : ExerciseDifficulty {
    return {
      fingerControl: 2,
      intervals: 8
    };
  }
}
