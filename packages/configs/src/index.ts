import { colors } from "./colors";
import { screens } from "./screens";

export { screens, colors };
export interface Configs {
  screens: typeof screens;
  colors: typeof colors;
}

const configs: Configs = { screens, colors };
export default configs;
