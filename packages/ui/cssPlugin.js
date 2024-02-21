import { createFilter } from "rollup-pluginutils";
import fs from "fs";
import path from "path";

export default function css(options = {}) {
	const filter = createFilter(options.include, options.exclude);

	return {
		name: "css",

		transform(code, id) {
			if (id.slice(-4) !== ".css" || !filter(id)) return;

			const css = fs.readFileSync(id, "utf-8").replace(/[\n\r]/g, "");
			const output = `export default ${JSON.stringify(css)};`;

			return {
				code: output,
				map: { mappings: "" },
			};
		},
	};
}
