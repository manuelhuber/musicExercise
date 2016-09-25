import {Component} from '@angular/core';
import {rndNumber} from '../../../core/util';
import {ExerciseService, ExerciseDifficulty} from '../../../difficulty-service/difficutly-service';
import {Finger, fingerSortingFunction} from '../../../core/model/finger';

@Component({
  templateUrl: 'build/pages/exercises/finger-control/finger-control.html'
})
export class FingerControl {
  difficulty : ExerciseDifficulty;
  fingerString : string;

  constructor (private exerciseService : ExerciseService) {
    this.difficulty = exerciseService.getDifficulty();
    this.newExercise();

  }

  newExercise () : void {
    this.fingerString = this.getExercise();
  }

  getExercise () : string {
    let fingers : Finger[] = [];
    let max : number = this.getNumberOfFingers();
    while (fingers.length < max && fingers.length < 10) {
      let potentialFinger : Finger = new Finger();
      if (!fingers.some(finger => finger.finger === potentialFinger.finger && finger.hand === potentialFinger.hand)) {
        fingers.push(potentialFinger);
      }
    }
    fingers.sort(fingerSortingFunction);
    fingers.map(finger => finger.toString());
    return fingers.join(' ');
  }

  getNumberOfFingers () : number {
    let fingers : number = rndNumber(1, 2 + this.exerciseService.getDifficulty().fingerControl);
    if (fingers > 6) {
      return 6;
    } else if (fingers < 1) {
      return 1;
    } else {
      return fingers;
    }
  }
}
