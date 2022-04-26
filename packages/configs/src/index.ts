import { colors } from "./colors";
import { screens } from "./screens";
import { spacing } from "./spacing";

export { screens, colors, spacing };

export interface ESWindConfigs {
  screens: typeof screens;
  colors: typeof colors;
  spacing: typeof spacing;
}

const Configs: ESWindConfigs = { screens, colors, spacing };
export default Configs;
