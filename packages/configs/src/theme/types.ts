import { ThemeScreens } from "./screens";
import { ThemeColors } from "./colors";
import { ThemeContainer } from "./container";
import { ConfigValue, ResolvableTo, KeyValuePair } from "@shared";

export interface ESWindThemeCore {
  screens: ThemeScreens;
  colors: ThemeColors;
  spacing: ConfigValue;
  container: ThemeContainer;
  inset: ESWindThemeCore["spacing"];
  zIndex: ConfigValue;
  order: ConfigValue;
  gridColumn: ConfigValue;
  gridColumnStart: ConfigValue;
  gridColumnEnd: ConfigValue;
  gridRow: ConfigValue;
  gridRowStart: ConfigValue;
  gridRowEnd: ConfigValue;
  margin: ESWindThemeCore["spacing"];
  aspectRatio: ConfigValue;
  height: ESWindThemeCore["spacing"];
  maxHeight: ESWindThemeCore["spacing"];
  minHeight: ConfigValue;
  width: ESWindThemeCore["spacing"];
  maxWidth: ConfigValue;
  minWidth: ConfigValue;
  flex: ConfigValue;
  flexShrink: ConfigValue;
  flexGrow: ConfigValue;
  flexBasis: ESWindThemeCore["spacing"];
  borderSpacing: ESWindThemeCore["spacing"];
  transformOrigin: ConfigValue;
  translate: ESWindThemeCore["spacing"];
  rotate: ConfigValue;
  skew: ConfigValue;
  scale: ConfigValue;
  animation: ConfigValue;
  keyframes: ResolvableTo<
    KeyValuePair<string, KeyValuePair<string, KeyValuePair>>
  >;
  cursor: ConfigValue;
  scrollMargin: ESWindThemeCore["spacing"];
  scrollPadding: ESWindThemeCore["spacing"];
  listStyleType: ConfigValue;
  columns: ConfigValue;
  gridAutoColumns: ConfigValue;
  gridAutoRows: ConfigValue;
  gridTemplateColumns: ConfigValue;
  gridTemplateRows: ConfigValue;
  gap: ESWindThemeCore["spacing"];
  space: ESWindThemeCore["spacing"];
  divideWidth: ESWindThemeCore["borderWidth"];
  divideColor: ESWindThemeCore["borderColor"];
  divideOpacity: ESWindThemeCore["borderOpacity"];
  borderRadius: ConfigValue;
  borderWidth: ConfigValue;
  borderColor: ESWindThemeCore["colors"];
  borderOpacity: ESWindThemeCore["opacity"];
  backgroundColor: ESWindThemeCore["colors"];
  backgroundOpacity: ESWindThemeCore["opacity"];
  backgroundImage: ConfigValue;
  gradientColorStops: ESWindThemeCore["colors"];
  backgroundSize: ConfigValue;
  backgroundPosition: ConfigValue;
  fill: ESWindThemeCore["colors"];
  stroke: ESWindThemeCore["colors"];
  strokeWidth: ConfigValue;
  objectPosition: ConfigValue;
  padding: ESWindThemeCore["spacing"];
  textIndent: ESWindThemeCore["spacing"];
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
  fontWeight: ConfigValue;
  lineHeight: ConfigValue;
  letterSpacing: ConfigValue;
  textColor: ESWindThemeCore["colors"];
  textOpacity: ESWindThemeCore["opacity"];
  textDecorationColor: ESWindThemeCore["colors"];
  textDecorationThickness: ConfigValue;
  textUnderlineOffset: ConfigValue;
  placeholderColor: ESWindThemeCore["colors"];
  placeholderOpacity: ESWindThemeCore["opacity"];
  caretColor: ESWindThemeCore["colors"];
  accentColor: ESWindThemeCore["colors"];
  opacity: ConfigValue;
  boxShadow: ConfigValue;
  boxShadowColor: ESWindThemeCore["colors"];
  outlineWidth: ConfigValue;
  outlineOffset: ConfigValue;
  outlineColor: ESWindThemeCore["colors"];
  ringWidth: ConfigValue;
  ringColor: ESWindThemeCore["colors"];
  ringOpacity: ESWindThemeCore["opacity"];
  ringOffsetWidth: ConfigValue;
  ringOffsetColor: ESWindThemeCore["colors"];
  blur: ConfigValue;
  brightness: ConfigValue;
  contrast: ConfigValue;
  dropShadow: ConfigValue;
  grayscale: ConfigValue;
  hueRotate: ConfigValue;
  invert: ConfigValue;
  saturate: ConfigValue;
  sepia: ConfigValue;
  backdropBlur: ESWindThemeCore["blur"];
  backdropBrightness: ESWindThemeCore["brightness"];
  backdropContrast: ESWindThemeCore["contrast"];
  backdropGrayscale: ESWindThemeCore["grayscale"];
  backdropHueRotate: ESWindThemeCore["hueRotate"];
  backdropInvert: ESWindThemeCore["invert"];
  backdropOpacity: ESWindThemeCore["opacity"];
  backdropSaturate: ESWindThemeCore["saturate"];
  backdropSepia: ESWindThemeCore["sepia"];
  transitionProperty: ConfigValue;
  transitionTimingFunction: ConfigValue;
  transitionDelay: ConfigValue;
  transitionDuration: ConfigValue;
  willChange: ConfigValue;
  content: ConfigValue;
  [key: string]: any;
}

export interface ESWindTheme extends ESWindThemeCore {
  extend: ESWindThemeCore;
}
