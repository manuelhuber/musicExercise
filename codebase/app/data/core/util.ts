/**
 * Returns a random integer between min (inclusive) and max (inclusive)
 */
export function rndNumber (min : number, max : number) : number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

/**
 * A random note, repestented by a number between 0 for A and 11 for G#
 */
export function randomNote () : number {
  return rndNumber(0, 11);
}

/**
 * Returns the note as a nice string
 * The "black key" notes are by default returned as the # version
 * @param note 0 = A, 11 = G# - Negative numbers will be treated as positive
 * @param decrease true if you want the "b-version" instead of # of the note (example: Db instead of C#)
 */
export function noteToString (note : number, decrease? : boolean) : string {
  let saveNote : number = Math.abs(note) % 12;
  switch (saveNote) {
    case 0:
      return 'A';
    case 1:
      return decrease ? 'Bb' : 'A#';
    case 2:
      return 'B';
    case 3:
      return 'C';
    case 4:
      return decrease ? 'Db' : 'C#';
    case 5:
      return 'D';
    case 6:
      return decrease ? 'Eb' : 'D#';
    case 7:
      return 'E';
    case 8:
      return 'F';
    case 9:
      return decrease ? 'Gb' : 'F#';
    case 10:
      return 'G';
    case 11:
      return decrease ? 'Ab' : 'G#';
    default:
      throw new Error('Math broke');
  }
}

const NOTE_SEPARATOR : string = ' / ';

/**
 * Returns a single string for all usual names of the note
 * For "white key" notes it will return only their single normal name
 * For "black key" notes it will return both variations with the given separator (or default)
 */
export function noteToAllCombinedStrings (note : number, separator : string = NOTE_SEPARATOR) : string {
  let a : string = noteToString(note, false);
  let b : string = noteToString(note, true);
  return a === b ? a : [a, b].join(separator);
}

/**
 * Returns the resulting note when going down the given amount fo steps from the starting note
 * @param startingNote
 * @param steps
 * @return {number}
 */
export function stepsDown (startingNote : number, steps : number) : number {
  let difference : number = startingNote - steps;
  difference = difference > 0 ? difference : 12 + difference;
  return Math.abs(difference) % 12;
}
