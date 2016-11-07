import {Component} from '@angular/core';
import {fingerSortingFunction, Finger} from '../../../../data/core/model/finger';
import {rndNumber} from '../../../../data/core/util';
import {ExerciseService} from '../../../../data/exercise-service/exercise-service';

const TIMER_MINIMUM : number = 0.5;

@Component({
  templateUrl: 'build/ui/pages/exercises/advanced-finger-exercise/advanced-finger-exercise.html'
})
export class AdvancedFingerExercise {

  fingerString : string;
  total : number = 0;

  _automaticNext : boolean = false;
  // Used to set the CSS styles to the loading bar inside the button
  animationActive : boolean;

  // Timer in ms
  timerDelay : number = 5000;
  private timer : any;

  // Enter seconds, saved as ms
  set timerSeconds (seconds : number) {
    if (seconds < TIMER_MINIMUM) {
      seconds = TIMER_MINIMUM;
    }
    this.timerDelay = seconds * 1000;
  }

  get timerSeconds () : number {
    return this.timerDelay / 1000;
  }

  set automaticNext (boo : boolean) {
    this._automaticNext = boo;
    this._automaticNext ? this.startTimeout() : this.cancelTimeout();
  }

  get automaticNext () : boolean {
    return this._automaticNext;
  }

  /**
   * Returns the string value for the CSS transition style of the loading bar
   * no animation === no transition
   */
  get transitionString () : string {
    return this.animationActive ? 'all ' + this.timerSeconds + 's linear' : 'none';
  }

  /**
   * Returns the string value for the CSS width style of the loading bar
   */
  get rightDistance () : string {
    return this.animationActive ? '0' : '100%';
  }

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
    this.total = 0;
  }

  /**
   * The fat button in the middle of the screen
   * On click a new exercise is generated
   * If automatic exercise is enabled, the timer (and loading bar) is reset
   */
  buttonClick () : void {
    this.cancelTimeout();
    this.newExercise();
    if (this.automaticNext) {
      this.startTimeout();
    }
  }

  /**
   * Sets a new exercise and ups the counter
   */
  newExercise () : void {
    this.fingerString = this.getExercise();
    this.total++;
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

  /**
   * Start a new timer and animation
   */
  private startTimeout () : void {
    // Reset animation
    this.animationActive = false;
    // This timeout is needed to make sure the loading thingy is reset
    setTimeout(() => {
      // Set
      this.animationActive = true;
      this.timer = setTimeout(() => {
        this.newExercise();
        this.startTimeout();
      }, this.timerDelay);
    }, 25);
  }

  private cancelTimeout () : void {
    clearTimeout(this.timer);
    this.animationActive = false;
  }
}
