import commonjs from "@rollup/plugin-commonjs";
import resolve from "@rollup/plugin-node-resolve";
import babel from "rollup-plugin-babel";

export default {
  input: "input.js",
  output: [
    {
      file: "output.js",
      format: "cjs"
    }
  ],
  plugins: [
    resolve(),
    commonjs({
      namedExports: {
        "linaria/react": ["styled"]
      }
    }),
    babel({ presets: [["linaria/babel"]] })
  ],
  external: [
    "react",
    "react-dom/server"
  ]
};
