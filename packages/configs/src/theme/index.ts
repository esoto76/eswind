import { screens } from "./screens";
import { colors } from "./colors";
import { spacing } from "./spacing";
import { ESWindThemeCore } from "./types";

const poof: Partial<ESWindThemeCore> = { screens, colors, spacing };

export { poof as default, screens, colors, spacing, ESWindThemeCore };

export * from "./screens";
export * from "./colors";
export * from "./spacing";
export * from "./container";
export * from "./types";
