import { createRequire } from "node:module";
// import { SourceMapGenerator } from "source-map";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import postcss from "rollup-plugin-postcss";
import MagicString from "magic-string";

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
				extract: true, // Detach CSS into a separate file
			}),
			{
				name: "add-css-import",
				async renderChunk(code, chunk, options) {
					const magicString = new MagicString(code);
					magicString.prepend('import "./index.css";\n');

					const map = options.sourcemap ? magicString.generateMap({ hires: true }) : null;

					return { code: magicString.toString(), map: map ? map.toString() : null };
				},
			},
		],
	},
];
