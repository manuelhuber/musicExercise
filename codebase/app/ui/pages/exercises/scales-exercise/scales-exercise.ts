import {Component} from '@angular/core';
import {ScaleModel, ALL_SCALES} from '../../../../data/core/model/scales';
import {rndNumber, randomNote, noteToAllCombinedStrings, noteToString} from '../../../../data/core/util';
import {TranslateService} from '../../../../data/translate/translate-service';

@Component({
  templateUrl: 'build/ui/pages/exercises/scales-exercise/scales-exercise.html'
})
export class ScalesExercise {

  startingNote : number;
  currentScale : ScaleModel;
  showSolution : boolean;

  get intervalInNotes () : string {
    let currentNote : number = this.startingNote;
    let noteArray : number[] = this.currentScale.intervals.map((steps : number) => {
      currentNote += steps;
      return currentNote;
    });
    noteArray.unshift(this.startingNote);
    return noteArray.map((note : number) => {
      return noteToString(note);
    }).join(' - ');
  }

  constructor (private translate : TranslateService) {
    this['noteToString'] = noteToAllCombinedStrings;
    this.newScale();
  }

  newScale () : void {
    this.startingNote = randomNote();
    let oldScale : ScaleModel = this.currentScale;
    while (oldScale === this.currentScale) {
      this.currentScale = ALL_SCALES[rndNumber(0, ALL_SCALES.length - 1)];
    }
    this.showSolution = false;
  }
}
