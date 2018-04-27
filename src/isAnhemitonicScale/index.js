// @flow

// https://en.wikipedia.org/wiki/Anhemitonic_scale

import isValidScale from '../isValidScale';
import getIntervals from '../getIntervals';
import normalizeScale from '../normalizeScale';

import { SEMITONE } from '../constants/Interval/Names';

type options = {
  direction?: direction
};

const isAnhemitonicscale = (scale: Scale, { direction = 1 }: options = {}) => {
  if (!isValidScale(scale, { direction })) return false;

  const normalizedScale = normalizeScale(scale, { direction });
  const intervals = getIntervals(normalizedScale);

  return intervals.filter(i => i === SEMITONE).length === 0;
};

export default isAnhemitonicscale;
