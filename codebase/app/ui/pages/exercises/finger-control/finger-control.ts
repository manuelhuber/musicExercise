import {Component} from '@angular/core';
import {rndNumber} from '../../../../data/core/util';
import {ExerciseService} from '../../../../data/core/services/exercise-service';
import {Finger, fingerSortingFunction} from '../../../../data/core/model/finger';
import {TimerButton} from '../../../components/timer-button/timer-button';
import {Page} from 'ionic-angular';

@Page({
  templateUrl: 'build/ui/pages/exercises/finger-control/finger-control.html',
  directives: [TimerButton]
})
export class FingerControl {

  fingerString : string;

  // Needed to pass a callback to a child component
  onButtonClick : Function;

  get difficulty () : number {
    return this.exerciseService ? this.exerciseService.getDifficulty().fingerControl : 1;
  };

  set difficulty (dif : number) {
    let newDifficulty : number = parseInt(<any>dif, 10);
    if (this.exerciseService && !isNaN(newDifficulty)) {
      this.exerciseService.setFingerControlDifficulty(newDifficulty);
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
    } while (newExercise === this.fingerString);
    this.fingerString = newExercise;
  }

  /**
   * Generates a new string for the finger exercise
   */
  getExercise () : string {
    let fingers : Finger[] = [];
    let max : number = this.getNumberOfFingers();
    while (fingers.length < max && fingers.length < 10) {
      // Constructor creates a random finger
      let potentialFinger : Finger = new Finger();
      // Add the finger if its not in the array already
      if (!fingers.some(finger => finger.equals(potentialFinger))) {
        fingers.push(potentialFinger);
      }
    }
    fingers.sort(fingerSortingFunction);
    fingers.map(finger => finger.toString());
    return fingers.join('-');
  }

  /**
   * Gets the number of fingers depending on the difficulty
   * The difficulty is the max number of fingers possible
   * @return number between 1 and 10
   */
  getNumberOfFingers () : number {
    // For difficulties above 3 we want a minimum of 2
    let min : number = this.difficulty > 3 ? 2 : 1;
    let fingers : number = rndNumber(min, this.difficulty);
    // only return numbers between 1 and 10
    return fingers > 10 ? 10 : fingers < 1 ? 1 : fingers;
  }

}
