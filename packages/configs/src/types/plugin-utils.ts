import { ResolvableTo, RecursiveKeyValuePair } from "./helpers";

export interface PluginUtils {
  colors: ResolvableTo<RecursiveKeyValuePair>;
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
