import { createRequire } from "node:module";
import { SourceMapGenerator } from "source-map";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import postcss from "rollup-plugin-postcss";
// import css from "./cssPlugin.js";
import css from "./cssPlugin.js";
import dts from "rollup-plugin-dts";
import { libStylePlugin } from "rollup-plugin-lib-style";

// This is required to read package.json file when
// using Native ES modules in Node.js
// https://rollupjs.org/command-line-interface/#importing-package-json
const requireFile = createRequire(import.meta.url);
const packageJson = requireFile("./package.json");

export default [
	{
		input: "src/index.tsx",
		output: [
			{
				file: packageJson.main,
				format: "cjs",
				sourcemap: true,
			},
			{
				file: packageJson.module,
				format: "esm",
				sourcemap: true,
			},
		],
		// external: [/\.css$/],
		plugins: [
			peerDepsExternal(),
			resolve(),
			commonjs(),
			typescript(),

			// libStylePlugin(), // This will output all your CSS into one file named 'bundle.css'
			postcss({
				modules: true,
				extract: true, // Detach CSS into a separate file
			}),
			{
				name: "add-css-import",
				renderChunk(code) {
					return `import './index.css';\n` + code;
				},
			},
		],
	},
];
