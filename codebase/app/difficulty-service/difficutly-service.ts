import {Injectable} from '@angular/core';

export interface ExerciseDifficulty {
  fingerControl : number;
}

@Injectable()
export class ExerciseService {

  private difficulty : ExerciseDifficulty = ExerciseService.getDefaultDifficulty();

  setFingerControlDifficulty (difficulty : number) : void {
    this.difficulty.fingerControl = difficulty;
  }

  getDifficulty () : ExerciseDifficulty {
    return this.difficulty;
  }

  static getDefaultDifficulty () : ExerciseDifficulty {
    return {
      fingerControl: 2
    };
  }
}
