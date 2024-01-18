module.exports = {
	outDir: "src/components",
	filenameCase: "camel",
	typescript: true,
	jsxRuntime: `automatic`,
	expandProps: "end",
	svgProps: {
		className: "{classCombine(styles.svg, className)}",
		"data-size": "{size}",
	},
	ref: true,
	template: require("./svgr/template.js"),
	indexTemplate: require("./svgr/indexTemplate.js"),
};
