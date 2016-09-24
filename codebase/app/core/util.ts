/**
 * Returns a random integer between min (inclusive) and max (inclusive)
 * Using Math.round() will give you a non-uniform distribution!
 */
export function rndNumber (min : number, max : number) : number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function randomNote () : number {
  return rndNumber(0, 11);
}

export function noteToString (note : number, decrease? : boolean) : string {
  let saveNote : number = note % 12;
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
