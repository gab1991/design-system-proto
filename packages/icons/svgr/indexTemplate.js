const path = require("node:path");

function defaultIndexTemplate(filePaths) {
	const exportEntries = filePaths.map(({ path: filePath }) => {
		const basename = path.basename(filePath, path.extname(filePath));
		const exportName = /^\d/.test(basename) ? `Svg${basename}` : basename;
		const capitalized = exportName.charAt(0).toUpperCase() + exportName.slice(1);
		return `export { default as ${capitalized} } from './${basename}'`;
	});
	exportEntries.unshift(`/// <reference types="../../../../types/sources.d.ts" />`);

	return exportEntries.join("\n");
}

module.exports = defaultIndexTemplate;
