import { DefColors } from "./default-colors";

export type Expand<T> = T extends object
  ? T extends infer O
    ? { [K in keyof O]: Expand<O[K]> }
    : never
  : T;

export type KeyValuePair<K extends keyof any = string, V = string> = Record<
  K,
  V
>;

export interface RecursiveKeyValuePair<
  K extends keyof any = string,
  V = string
> {
  [key: string]: V | RecursiveKeyValuePair<K, V>;
}

export type ResolvableTo<T> = T | ((utils: PluginUtils) => T);

export interface PluginUtils {
  colors: DefColors;
  theme(path: string, defaultValue?: unknown): any;
  breakpoints<I = Record<string, unknown>, O = I>(arg: I): O;
  rgb(
    arg: string
  ): (
    arg: Partial<{ opacityVariable: string; opacityValue: number }>
  ) => string;
  hsl(
    arg: string
  ): (
    arg: Partial<{ opacityVariable: string; opacityValue: number }>
  ) => string;
}

export type ConfigValue = ResolvableTo<KeyValuePair>;
export default {};
