import {Component} from '@angular/core';
import {rndNumber} from '../../../../data/core/util';
import {ExerciseService} from '../../../../data/exercise-service/exercise-service';
import {Finger, fingerSortingFunction} from '../../../../data/core/model/finger';

const TIMER_MINIMUM : number = 0.5;

@Component({
  templateUrl: 'build/ui/pages/exercises/finger-control/finger-control.html'
})
export class FingerControl {

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
    let fingers : Finger[] = [];
    let max : number = this.getNumberOfFingers();
    while (fingers.length < max && fingers.length < 10) {
      // Constructor creates a random finger
      let potentialFinger : Finger = new Finger();
      // Add the finger if its not in the array already
      if (!fingers.some(finger => finger.finger === potentialFinger.finger && finger.hand === potentialFinger.hand)) {
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
    let min : number = this.difficulty > 3 ? 2 : 1;
    let fingers : number = rndNumber(min, this.difficulty);
    // only return numbers between 1 and 10
    return fingers > 10 ? 10 : fingers < 1 ? 1 : fingers;
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
