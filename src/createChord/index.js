// @flow

import transpose from '../transpose';
import isValidIntervalArray from '../isValidIntervalArray';
import { ROOT } from '../constants/Interval/Names';

const createChord = (
  root: ScientificNote,
  chord: Intervals
): ScientificNotes => {
  if (!isValidIntervalArray(chord)) {
    throw new Error(
      `Provide a valid collection of chord intervals ex: [0, 1, 3]`
    );
  }

  if (chord[0] !== ROOT) {
    throw new Error(`First interval of chord should be 0 (Root)`);
  }

  return chord.reduce(
    (acc, interval) => [...acc, transpose(root, interval)],
    []
  );
};

export default createChord;
