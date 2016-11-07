import {randomNote, rndNumber, stepsDown, noteToString} from '../../../../data/core/util';
import {ExerciseService} from '../../../../data/core/services/exercise-service';
import {Page} from 'ionic-angular';

@Page({
  templateUrl: 'build/ui/pages/exercises/intervals/intervals.html'
})
export class Intervals {

  nextInterval : number;
  nextIntervalIsUp : boolean;
  currentNote : number;
  decreaseNote : boolean;

  get difficulty () : number {
    return this.exerciseService ? this.exerciseService.getDifficulty().intervals : 1;
  };

  set difficulty (dif : number) {
    let newDifficulty : number = parseInt(<any>dif, 10);
    if (this.exerciseService && !isNaN(newDifficulty)) {
      this.exerciseService.setIntervalsDifficulty(newDifficulty);
    }
  }

  get currentNoteString () : string {
    return noteToString(this.currentNote, this.decreaseNote);
  }

  constructor (private exerciseService : ExerciseService) {
    this.currentNote = randomNote();
    this.newInterval();
  }

  up () : void {
    this.currentNote = this.currentNote + this.nextInterval;
    this.newInterval();
  }

  down () : void {
    this.currentNote = stepsDown(this.currentNote, this.nextInterval);
    this.newInterval();
  }

  newInterval () : void {
    let lastInterval : number = this.nextInterval;
    while (this.nextInterval === lastInterval) {
      this.nextInterval = rndNumber(1, this.difficulty);
    }
    this.nextIntervalIsUp = Math.random() < 0.5;
    this.decreaseNote = Math.random() < 0.5;
  }

}
