module.exports = {
	outDir: "src/components",
	typescript: true,
	jsxRuntime: `automatic`,
	expandProps: false,
	svgProps: { className: "{`${styles.svg} ${className}`}", "data-size": "{size}" },
	ref: true,
	template: require("./svgr/template.js"),
	indexTemplate: require("./svgr/indexTemplate.js"),
	filenameCase: "camel",
};
