// @ts-nocheck
import Alias from "@rollup/plugin-alias";
import Babel from "@rollup/plugin-babel";
import Commonjs from "@rollup/plugin-commonjs";
import Json from "@rollup/plugin-json";
import Resolve from "@rollup/plugin-node-resolve";
import TS from "rollup-plugin-ts";
import { resolve } from "path";

const root = resolve(__dirname);

const customResolver = Resolve({
  extensions: [".mjs", ".js", ".jsx", ".json", ".sass", ".scss", ".ts"],
});

const entries = [
  {
    find: "@/",
    replacement: resolve(root, "src"),
  },
  {
    find: "@shared",
    replacement: resolve(root, "src/shared/index.ts"),
  },
  {
    find: "@shared/",
    replacement: resolve(root, "src/shared"),
  },
  {
    find: "@theme",
    replacement: resolve(root, "src/theme/index.ts"),
  },
  {
    find: "@theme/",
    replacement: resolve(root, "src/theme"),
  },
];

const input = {
  theme: "./src/theme/index.ts",
  shared: "./src/shared/index.ts",
  index: "./src/index.ts",
};

const external = [];

const preserveEntrySignatures = "allow-extension";

const output = {
  format: "cjs",
  dir: "dist",
  chunkFileNames: "[name].js",
  entryFileNames: "[name].js",
  preferConst: true,
  freeze: false,
  exports: "named",
  externalLiveBindings: false,
  manualChunks: (id) => Object.keys(input).find((v) => id.includes(v)),
};

const plugins = [
  Alias({ entries, customResolver }),
  TS({ tsconfig: "./tsconfig.json" }),
  Json({ namedExports: true, preferConst: true }),
  Babel({ babelHelpers: "bundled" }),
  Commonjs(),
  Resolve(),
];

const watch = {
  exclude: "node_modules/**",
  include: "src/**",
  chokidar: {
    paths: "src/**",
  },
};

export default {
  input,
  external,
  output,
  plugins,
  watch,
  treeshake: "smallest",
};
