// @ts-nocheck
import Babel from "@rollup/plugin-babel";
import Commonjs from "@rollup/plugin-commonjs";
import Json from "@rollup/plugin-json";
import Resolve from "@rollup/plugin-node-resolve";
import TS from "rollup-plugin-ts";

const input = "./src/index.ts";

const external = [];

const output = {
  format: "cjs",
  file: "dist/index.js",
  preferConst: true,
  generatedCode: "es2015",
  freeze: false,
  exports: "default",
  externalLiveBindings: true,
};

const plugins = [
  TS(),
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
