import {Component, Input} from '@angular/core';

const TIMER_MINIMUM : number = 0.5;

@Component({
  selector: 'timer-button',
  templateUrl: 'build/ui/components/timer-button/timer-button.html'
})
export class TimerButton {

  @Input()
  onClick : Function;

  @Input()
  content : string;

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

  /**
   * The fat button in the middle of the screen
   * On click a new exercise is generated
   * If automatic next is enabled, the timer (and loading bar) is reset
   */
  buttonClick () : void {
    this.cancelTimeout();
    this.onClick();
    if (this.automaticNext) {
      this.startTimeout();
    }
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
        this.onClick();
        this.startTimeout();
      }, this.timerDelay);
    }, 25);
  }

  private cancelTimeout () : void {
    clearTimeout(this.timer);
    this.animationActive = false;
  }
}
