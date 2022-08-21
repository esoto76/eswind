export type IsFn = (v: any) => boolean;

export const IsDef: IsFn = v => (v !== undefined ? true : false);

export const IsBool: IsFn = v =>
  IsDef(v) && typeof v === 'boolean' ? true : false;

export const IsNum: IsFn = v =>
  IsDef(v) && typeof v === 'number' ? true : false;

export const IsArr: IsFn = v => (IsDef(v) && Array.isArray(v) ? true : false);

export const IsObj: IsFn = v =>
  IsDef(v) && !IsArr(v) && typeof v === 'object' ? true : false;

export const OKeys: (v: any) => string[] = v =>
  IsObj(v) ? Object.keys(v) : [];

export const MergeObjs: (v: { [key: string]: any }[]) => {
  [key: string]: any;
} = v => {
  if (IsObj(v)) return v;
  if (!IsArr(v) || v.length === 0) return {};
  const obj = {};
  for (let o of v) if (IsObj(o)) for (let k in o) obj[k] = o[k];

  return obj;
};
