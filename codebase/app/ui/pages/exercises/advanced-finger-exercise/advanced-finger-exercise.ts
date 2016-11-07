import {Component} from '@angular/core';
import {rndNumber} from '../../../../data/core/util';
import {ExerciseService} from '../../../../data/exercise-service/exercise-service';
import {TimerButton} from '../../../components/timer-button/timer-button';

@Component({
  templateUrl: 'build/ui/pages/exercises/advanced-finger-exercise/advanced-finger-exercise.html',
  directives: [TimerButton]
})
export class AdvancedFingerExercise {

  exerciseString : string;

  // Needed to pass a callback to a child component
  onButtonClick : Function;

  get difficulty () : number {
    return this.exerciseService ? this.exerciseService.getDifficulty().advancedFingerExercise : 1;
  };

  set difficulty (dif : number) {
    let newDifficulty : number = parseInt(<any>dif, 10);
    if (this.exerciseService && !isNaN(newDifficulty)) {
      this.exerciseService.setAdvancedFingerExerciseDifficulty(newDifficulty);
    }
  }

  constructor (private exerciseService : ExerciseService) {
    this.newExercise();
    this.onButtonClick = this.newExercise.bind(this);
  }

  /**
   * Sets a new exercise and ups the counter
   */
  newExercise () : void {
    let newExercise : string;
    do {
      newExercise = this.getExercise();
    } while (newExercise === this.exerciseString);
    this.exerciseString = newExercise;
  }

  /**
   * Generates a new string for the finger exercise
   */
  getExercise () : string {
    let fingers : number[] = [];
    let max : number = rndNumber(Math.ceil(this.difficulty / 2), this.difficulty);
    let lastFinger : number;
    while (fingers.length < max) {
      // Constructor creates a random finger
      let potentialFinger : number = rndNumber(1, 5);
      // Add the finger if its not in the array already
      if (lastFinger !== potentialFinger) {
        fingers.push(potentialFinger);
        lastFinger = potentialFinger;
      }
    }
    return fingers.join('-');
  }
}
