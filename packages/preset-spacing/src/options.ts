import { SpacingOptions } from './types';
import { IsObj, IsDef } from './helpers';

export const DefSpacingOptions: SpacingOptions = {
  end: 320,
  isPx: true,
  isRem: true,
  prefix: '',
  range: 8,
  remVal: 16,
  start: 24
};

const GetOptionVal: (key: string, val: any) => number | boolean = (
  key,
  val
) => {
  const def = DefSpacingOptions[key];
  return IsDef(val) && typeof def === typeof val ? val : def;
};

export const SpacingOptionsParser: (
  options: Partial<SpacingOptions>
) => SpacingOptions = options => {
  if (!IsObj(options)) return DefSpacingOptions;
  const opts = {};

  for (let k in DefSpacingOptions) opts[k] = GetOptionVal(k, options[k]);
  return opts as SpacingOptions;
};
