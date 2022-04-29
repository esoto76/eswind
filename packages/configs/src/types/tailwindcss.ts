// Helpers
type Expand<T> = T extends object
  ? T extends infer O
    ? { [K in keyof O]: Expand<O[K]> }
    : never
  : T;

type KeyValuePair<K extends keyof any = string, V = string> = Record<K, V>;

interface RecursiveKeyValuePair<K extends keyof any = string, V = string> {
  [key: string]: V | RecursiveKeyValuePair<K, V>;
}

type ResolvableTo<T> = T | ((utils: PluginUtils) => T);

interface PluginUtils {
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

type ESWindScreen =
  | { raw: string }
  | { min: string }
  | { max: string }
  | { min: string; max: string };

type ESWindScreensConfig =
  | string[]
  | KeyValuePair<string, string | ESWindScreen | ESWindScreen[]>;

export interface ESWindThemeConfig {
  extend: Partial<Omit<ESWindThemeConfig, "extend">>;
  screens: ResolvableTo<ESWindScreensConfig>;
  colors: ResolvableTo<RecursiveKeyValuePair>;
  spacing: ResolvableTo<KeyValuePair>;
  container: ResolvableTo<
    Partial<{
      screens: ESWindScreensConfig;
      center: boolean;
      padding: string | Record<string, string>;
    }>
  >;
  inset: ESWindThemeConfig["spacing"];
  zIndex: ResolvableTo<KeyValuePair>;
  order: ResolvableTo<KeyValuePair>;
  gridColumn: ResolvableTo<KeyValuePair>;
  gridColumnStart: ResolvableTo<KeyValuePair>;
  gridColumnEnd: ResolvableTo<KeyValuePair>;
  gridRow: ResolvableTo<KeyValuePair>;
  gridRowStart: ResolvableTo<KeyValuePair>;
  gridRowEnd: ResolvableTo<KeyValuePair>;
  margin: ESWindThemeConfig["spacing"];
  aspectRatio: ResolvableTo<KeyValuePair>;
  height: ESWindThemeConfig["spacing"];
  maxHeight: ESWindThemeConfig["spacing"];
  minHeight: ResolvableTo<KeyValuePair>;
  width: ESWindThemeConfig["spacing"];
  maxWidth: ResolvableTo<KeyValuePair>;
  minWidth: ResolvableTo<KeyValuePair>;
  flex: ResolvableTo<KeyValuePair>;
  flexShrink: ResolvableTo<KeyValuePair>;
  flexGrow: ResolvableTo<KeyValuePair>;
  flexBasis: ESWindThemeConfig["spacing"];
  borderSpacing: ESWindThemeConfig["spacing"];
  transformOrigin: ResolvableTo<KeyValuePair>;
  translate: ESWindThemeConfig["spacing"];
  rotate: ResolvableTo<KeyValuePair>;
  skew: ResolvableTo<KeyValuePair>;
  scale: ResolvableTo<KeyValuePair>;
  animation: ResolvableTo<KeyValuePair>;
  keyframes: ResolvableTo<
    KeyValuePair<string, KeyValuePair<string, KeyValuePair>>
  >;
  cursor: ResolvableTo<KeyValuePair>;
  scrollMargin: ESWindThemeConfig["spacing"];
  scrollPadding: ESWindThemeConfig["spacing"];
  listStyleType: ResolvableTo<KeyValuePair>;
  columns: ResolvableTo<KeyValuePair>;
  gridAutoColumns: ResolvableTo<KeyValuePair>;
  gridAutoRows: ResolvableTo<KeyValuePair>;
  gridTemplateColumns: ResolvableTo<KeyValuePair>;
  gridTemplateRows: ResolvableTo<KeyValuePair>;
  gap: ESWindThemeConfig["spacing"];
  space: ESWindThemeConfig["spacing"];
  divideWidth: ESWindThemeConfig["borderWidth"];
  divideColor: ESWindThemeConfig["borderColor"];
  divideOpacity: ESWindThemeConfig["borderOpacity"];
  borderRadius: ResolvableTo<KeyValuePair>;
  borderWidth: ResolvableTo<KeyValuePair>;
  borderColor: ESWindThemeConfig["colors"];
  borderOpacity: ESWindThemeConfig["opacity"];
  backgroundColor: ESWindThemeConfig["colors"];
  backgroundOpacity: ESWindThemeConfig["opacity"];
  backgroundImage: ResolvableTo<KeyValuePair>;
  gradientColorStops: ESWindThemeConfig["colors"];
  backgroundSize: ResolvableTo<KeyValuePair>;
  backgroundPosition: ResolvableTo<KeyValuePair>;
  fill: ESWindThemeConfig["colors"];
  stroke: ESWindThemeConfig["colors"];
  strokeWidth: ResolvableTo<KeyValuePair>;
  objectPosition: ResolvableTo<KeyValuePair>;
  padding: ESWindThemeConfig["spacing"];
  textIndent: ESWindThemeConfig["spacing"];
  fontFamily: ResolvableTo<KeyValuePair<string, string[]>>;
  fontSize: ResolvableTo<
    KeyValuePair<
      string,
      | string
      | [fontSize: string, lineHeight: string]
      | [
          fontSize: string,
          configuration: Partial<{
            lineHeight: string;
            letterSpacing: string;
          }>
        ]
    >
  >;
  fontWeight: ResolvableTo<KeyValuePair>;
  lineHeight: ResolvableTo<KeyValuePair>;
  letterSpacing: ResolvableTo<KeyValuePair>;
  textColor: ESWindThemeConfig["colors"];
  textOpacity: ESWindThemeConfig["opacity"];
  textDecorationColor: ESWindThemeConfig["colors"];
  textDecorationThickness: ResolvableTo<KeyValuePair>;
  textUnderlineOffset: ResolvableTo<KeyValuePair>;
  placeholderColor: ESWindThemeConfig["colors"];
  placeholderOpacity: ESWindThemeConfig["opacity"];
  caretColor: ESWindThemeConfig["colors"];
  accentColor: ESWindThemeConfig["colors"];
  opacity: ResolvableTo<KeyValuePair>;
  boxShadow: ResolvableTo<KeyValuePair>;
  boxShadowColor: ESWindThemeConfig["colors"];
  outlineWidth: ResolvableTo<KeyValuePair>;
  outlineOffset: ResolvableTo<KeyValuePair>;
  outlineColor: ESWindThemeConfig["colors"];
  ringWidth: ResolvableTo<KeyValuePair>;
  ringColor: ESWindThemeConfig["colors"];
  ringOpacity: ESWindThemeConfig["opacity"];
  ringOffsetWidth: ResolvableTo<KeyValuePair>;
  ringOffsetColor: ESWindThemeConfig["colors"];
  blur: ResolvableTo<KeyValuePair>;
  brightness: ResolvableTo<KeyValuePair>;
  contrast: ResolvableTo<KeyValuePair>;
  dropShadow: ResolvableTo<KeyValuePair>;
  grayscale: ResolvableTo<KeyValuePair>;
  hueRotate: ResolvableTo<KeyValuePair>;
  invert: ResolvableTo<KeyValuePair>;
  saturate: ResolvableTo<KeyValuePair>;
  sepia: ResolvableTo<KeyValuePair>;
  backdropBlur: ESWindThemeConfig["blur"];
  backdropBrightness: ESWindThemeConfig["brightness"];
  backdropContrast: ESWindThemeConfig["contrast"];
  backdropGrayscale: ESWindThemeConfig["grayscale"];
  backdropHueRotate: ESWindThemeConfig["hueRotate"];
  backdropInvert: ESWindThemeConfig["invert"];
  backdropOpacity: ESWindThemeConfig["opacity"];
  backdropSaturate: ESWindThemeConfig["saturate"];
  backdropSepia: ESWindThemeConfig["sepia"];
  transitionProperty: ResolvableTo<KeyValuePair>;
  transitionTimingFunction: ResolvableTo<KeyValuePair>;
  transitionDelay: ResolvableTo<KeyValuePair>;
  transitionDuration: ResolvableTo<KeyValuePair>;
  willChange: ResolvableTo<KeyValuePair>;
  content: ResolvableTo<KeyValuePair>;
  [key: string]: any;
}

export type ESWindConfigsPkg = Partial<ESWindThemeConfig>;
