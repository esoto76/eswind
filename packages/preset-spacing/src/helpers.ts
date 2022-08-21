export type IsFn = (v: any) => boolean;

export const IsDef: IsFn = v => (v !== undefined ? true : false);

export const IsBool: IsFn = v =>
  IsDef(v) && typeof v === 'boolean' ? true : false;

export const IsNum: IsFn = v =>
  IsDef(v) && typeof v === 'number' ? true : false;

export const IsArr: IsFn = v => (IsDef(v) && Array.isArray(v) ? true : false);

export const IsObj: IsFn = v =>
  IsDef(v) && !IsArr(v) && typeof v === 'object' ? true : false;
