import { createRequire } from "node:module";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import postcss from "rollup-plugin-postcss";

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
		plugins: [
			peerDepsExternal(),
			resolve(),
			commonjs(),
			typescript(),
			postcss({
				modules: true,
				sourceMap: true,
				extract: true, // Detach CSS into a separate file
			}),
			{
				name: "add-css-import",
				renderChunk(code, chunk, options) {
					const importStatement = options.format === "cjs" ? 'require("./index.css");\n' : 'import "./index.css";\n';
					const newCode = importStatement + code;
					return {
						code: newCode,
						map: { mappings: "" }, // empty sourcemap
					};
				},
			},
		],
	},
];
