import { GetSpacingFn } from './types';
import { SpacingOptionsParser } from './options';
import { IsNum, OKeys, MergeObjs } from './helpers';

const getNumbers: (
  start: number,
  end: number,
  range: number
) => { [key: string]: string } = (start, end, range) => {
  if (!IsNum(start) || !IsNum(end) || !IsNum(range)) return {};
  const nums = {};

  for (let i = start; i <= end; i = i + range) nums[`${i}`] = `${i}`;

  return nums;
};

export const GetSpacing: GetSpacingFn = options => {
  const { end, isPx, isRem, prefix, range, remVal, start } =
    SpacingOptionsParser(options);
  const nums = MergeObjs([
    getNumbers(0, start, 1),
    getNumbers(start, end, range)
  ]);

  const spacing = {};

  if (isPx || !isRem)
    for (let k of OKeys(nums)) spacing[`${prefix}${k}-px`] = `${k}px`;

  if (!isRem) return spacing;

  for (let k of OKeys(nums))
    spacing[`${prefix}${k}-rem`] = `${Number(k) / remVal}rem`;

  return spacing;
};
