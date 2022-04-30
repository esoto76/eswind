import { ResolvableTo } from "@shared";
import { ScreensConfig } from "./screens";

export type ThemeContainer = ResolvableTo<
  Partial<{
    screens: ScreensConfig;
    center: boolean;
    padding: string | Record<string, string>;
  }>
>;
