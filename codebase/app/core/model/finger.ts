import {rndNumber} from '../util';
/**
 * Represents a single finger of a specific hand.
 */
export class Finger {
  /**
   * 0 = thumb
   * ...
   * 4 = pinky
   */
  finger : number;
  /**
   * 0 = left
   * 1 = right
   */
  hand : number;

  constructor (finger : number = rndNumber(0, 4), hand : number = rndNumber(0, 1)) {
    this.finger = finger;
    this.hand = hand;
  }

  /**
   * Format: {{Hand}}{{Finger}}
   * Hand is either 'L' or 'R'
   * Finger is the number as defined in the Finger class
   */
  toString () : string {
    let s : string = this.hand === 0 ? 'L' : 'R';
    s += this.finger;
    return s;
  }

}

/**
 * Sort fingers from left to right.
 * Left Pinky < Left Thumb < Right Thumb < Right Pinky
 */
export function fingerSortingFunction (a : Finger, b : Finger) : number {
  if (a.hand < b.hand) {
    return -1;
  } else if (a.hand > b.hand) {
    return 1;
  } else {
    return a.hand === 0 ? a.finger - b.finger : b.finger - a.finger;
  }
}
