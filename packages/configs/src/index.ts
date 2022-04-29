import { colors } from "./colors";
import { screens } from "./screens";
import { spacing } from "./spacing";
import { ESWindConfigsPkg } from "./types";

export { screens, colors, spacing };

const Configs: ESWindConfigsPkg = { screens, colors, spacing };
export default Configs;
export * from "./types";
