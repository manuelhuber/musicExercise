import {Component} from '@angular/core';
import {rndNumber} from '../../../core/util';
import {ExerciseService} from '../../../difficulty-service/difficutly-service';
import {Finger, fingerSortingFunction} from '../../../core/model/finger';

const TIMER_MINIMUM : number = 0.5;

@Component({
  templateUrl: 'build/pages/exercises/finger-control/finger-control.html'
})
export class FingerControl {

  fingerString : string;
  total : number = 0;

  _automaticNext : boolean = false;
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

  get timerDelayString () : string {
    return this.animationActive ? 'all ' + this.timerSeconds + 's linear' : 'none';
  }

  get rightDistance () : string {
    return this.animationActive ? '0' : '100%';
  }

  constructor (private exerciseService : ExerciseService) {
    this.newExercise();
    this.total = 0;
  }

  buttonClick () : void {
    this.cancelTimeout();
    this.newExercise();
    if (this.automaticNext) {
      this.startTimeout();
    }
  }

  newExercise () : void {
    this.fingerString = this.getExercise();
    this.total++;
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

  private startTimeout () : void {
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