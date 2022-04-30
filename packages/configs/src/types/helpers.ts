import { PluginUtils } from "./plugin-utils";

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
