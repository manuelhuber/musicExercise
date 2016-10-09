export interface AccordModel {
  name : string;
  intervals : number[];
}

export const MAJOR_ACCORD : AccordModel = {
  name: 'ACCORDS.MAJOR_ACCORD',
  intervals: [4, 3]
};

export const MINOR_ACCORD : AccordModel = {
  name: 'ACCORDS.MINOR_ACCORD',
  intervals: [3, 4]
};

export const DOMINANT_SEVENTH : AccordModel = {
  name: 'ACCORDS.DOMINANT_SEVENTH',
  intervals: [4, 3, 3]
};

export const MINOR_SEVENTH : AccordModel = {
  name: 'ACCORDS.MINOR_SEVENTH',
  intervals: [3, 4, 3]
};

export const MAJOR_SEVENTH : AccordModel = {
  name: 'ACCORDS.MAJOR_SEVENTH',
  intervals: [4, 3, 4]
};

export const MAJOR_ADDED_SECOND : AccordModel = {
  name: 'ACCORDS.MAJOR_ADDED_SECOND',
  intervals: [2, 2, 3]
};

export const MINOR_ADDED_SECOND : AccordModel = {
  name: 'ACCORDS.MINOR_ADDED_SECOND',
  intervals: [2, 1, 4]
};

export const MAJOR_SIXTH : AccordModel = {
  name: 'ACCORDS.MAJOR_SIXTH',
  intervals: [4, 3, 2]
};

export const SUSPENDED : AccordModel = {
  name: 'ACCORDS.SUSPENDED',
  intervals: [5, 2]
};

export const DOMINANT_SEVENTH_SUSPENDED_FOURTH : AccordModel = {
  name: 'ACCORDS.DOMINANT_SEVENTH_SUSPENDED_FOURTH',
  intervals: [5, 2, 3]
};

export const SUSPENDED_SECOND : AccordModel = {
  name: 'ACCORDS.SUSPENDED_SECOND',
  intervals: [2, 5]
};

export const DIMINISHED : AccordModel = {
  name: 'ACCORDS.DIMINISHED',
  intervals: [3, 3]
};

export const DIMINISHED_SEVENTH : AccordModel = {
  name: 'ACCORDS.DIMINISHED_SEVENTH',
  intervals: [3, 3, 3]
};

export const AUGMENTED : AccordModel = {
  name: 'ACCORDS.AUGMENTED',
  intervals: [4, 4]
};

export const MINOR_SIXTH : AccordModel = {
  name: 'ACCORDS.MINOR_SIXTH',
  intervals: [3, 4, 2]
};

export const MINOR_SEVENTH_FLAT_FIVE : AccordModel = {
  name: 'ACCORDS.MINOR_SEVENTH_FLAT_FIVE',
  intervals: [3, 3, 4]
};

export const MINOR_MAJOR_SEVENTH : AccordModel = {
  name: 'ACCORDS.MINOR_MAJOR_SEVENTH',
  intervals: [3, 4, 4]
};

export const DOMINANT_SEVENTH_FLAT_FIVE : AccordModel = {
  name: 'ACCORDS.DOMINANT_SEVENTH_FLAT_FIVE',
  intervals: [4, 2, 4]
};

export const DOMINANT_SEVENTH_SHARP_FIVE : AccordModel = {
  name: 'ACCORDS.DOMINANT_SEVENTH_SHARP_FIVE',
  intervals: [4, 4, 2]
};

export const MAJOR_SEVENTH_FLAT_FIVE : AccordModel = {
  name: 'ACCORDS.MAJOR_SEVENTH_FLAT_FIVE',
  intervals: [4, 2, 5]
};

export const MAJOR_SEVENTH_SHARP_FIVE : AccordModel = {
  name: 'ACCORDS.MAJOR_SEVENTH_SHARP_FIVE',
  intervals: [4, 4, 3]
};
export const SIX_NINE : AccordModel = {
  name: 'ACCORDS.SIX_NINE',
  intervals: [4, 3, 2, 5]
};
export const MAJOR_ADDED_NINTH : AccordModel = {
  name: 'ACCORDS.MAJOR_ADDED_NINTH',
  intervals: [4, 3, 7]
};
export const NINTH : AccordModel = {
  name: 'ACCORDS.NINTH',
  intervals: [4, 3, 3, 4]
};
export const MAJOR_NINTH : AccordModel = {
  name: 'ACCORDS.MAJOR_NINTH',
  intervals: [4, 3, 4, 3]
};
export const MINOR_NINTH : AccordModel = {
  name: 'ACCORDS.MINOR_NINTH',
  intervals: [3, 4, 3, 4]
};
export const SEVENTH_FLAT_NINE : AccordModel = {
  name: 'ACCORDS.SEVENTH_FLAT_NINE',
  intervals: [4, 3, 3, 3]
};
export const SEVENTH_SHARP_NINE : AccordModel = {
  name: 'ACCORDS.SEVENTH_SHARP_NINE',
  intervals: [4, 3, 3, 5]
};
export const SEVENTH_FLAT_FIVE_FLAT_NINE : AccordModel = {
  name: 'ACCORDS.SEVENTH_FLAT_FIVE_FLAT_NINE',
  intervals: [4, 2, 4, 3]
};
export const SEVENTH_SHARP_FIVE_FLAT_NINE : AccordModel = {
  name: 'ACCORDS.SEVENTH_SHARP_FIVE_FLAT_NINE',
  intervals: [4, 4, 2, 3]
};
export const SEVENTH_FLAT_FIVE_SHARP_NINE : AccordModel = {
  name: 'ACCORDS.SEVENTH_FLAT_FIVE_SHARP_NINE',
  intervals: [4, 2, 4, 5]
};
export const SEVENTH_SHARP_FIVE_SHARP_NINE : AccordModel = {
  name: 'ACCORDS.SEVENTH_SHARP_FIVE_SHARP_NINE',
  intervals: [4, 4, 2, 5]
};
export const ELEVENTH : AccordModel = {
  name: 'ACCORDS.ELEVENTH',
  intervals: [4, 3, 3, 4, 3]
};
export const SEVENTH_SHARP_ELEVENTH : AccordModel = {
  name: 'ACCORDS.SEVENTH_SHARP_ELEVENTH',
  intervals: [4, 3, 3, 4, 4]
};
export const MINOR_ELEVENTH : AccordModel = {
  name: 'ACCORDS.MINOR_ELEVENTH',
  intervals: [3, 4, 3, 4, 3]
};
export const THIRTEENTH : AccordModel = {
  name: 'ACCORDS.THIRTEENTH',
  intervals: [4, 3, 3, 4, 3, 4]
};
export const MINOR_THIRTHEENTH : AccordModel = {
  name: 'ACCORDS.MINOR_THIRTHEENTH',
  intervals: [3, 4, 3, 4, 3, 4]
};

export const ALL_ACCORDS : AccordModel[] = [
  MAJOR_ACCORD,
  MINOR_ACCORD,
  DOMINANT_SEVENTH,
  MINOR_SEVENTH,
  MAJOR_SEVENTH,
  MAJOR_ADDED_SECOND,
  MINOR_ADDED_SECOND,
  MAJOR_SIXTH,
  SUSPENDED,
  DOMINANT_SEVENTH_SUSPENDED_FOURTH,
  SUSPENDED_SECOND,
  DIMINISHED,
  DIMINISHED_SEVENTH,
  AUGMENTED,
  MINOR_SIXTH,
  MINOR_SEVENTH_FLAT_FIVE,
  MINOR_MAJOR_SEVENTH,
  DOMINANT_SEVENTH_FLAT_FIVE,
  DOMINANT_SEVENTH_SHARP_FIVE,
  MAJOR_SEVENTH_FLAT_FIVE,
  MAJOR_SEVENTH_SHARP_FIVE,
  SIX_NINE,
  MAJOR_ADDED_NINTH,
  NINTH,
  MAJOR_NINTH,
  MINOR_NINTH,
  SEVENTH_FLAT_NINE,
  SEVENTH_SHARP_NINE,
  SEVENTH_FLAT_FIVE_FLAT_NINE,
  SEVENTH_SHARP_FIVE_FLAT_NINE,
  SEVENTH_FLAT_FIVE_SHARP_NINE,
  SEVENTH_SHARP_FIVE_SHARP_NINE,
  ELEVENTH,
  SEVENTH_SHARP_ELEVENTH,
  MINOR_ELEVENTH,
  THIRTEENTH,
  MINOR_THIRTHEENTH
];
