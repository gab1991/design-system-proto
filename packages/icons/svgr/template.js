const propTypesTemplate = (ast, context) => {
	const { tpl } = context;
	const { imports, interfaces, componentName, props, jsx, exports } = ast;

	props[0] = {
		type: "ObjectPattern",
		properties: [
			{
				type: "ObjectProperty",
				key: {
					type: "Identifier",
					name: "className",
				},
				value: {
					type: "Identifier",
					name: "className",
				},
			},
			{
				type: "ObjectProperty",
				key: {
					type: "Identifier",
					name: "size",
				},
				value: {
					type: "AssignmentPattern",
					left: {
						type: "Identifier",
						name: "size",
					},
					right: {
						type: "StringLiteral",
						value: "s",
					},
				},
			},
			{
				type: "RestElement",
				argument: {
					type: "Identifier",
					name: "props",
				},
			},
		],
		typeAnnotation: {
			type: "TSTypeAnnotation",
			typeAnnotation: {
				type: "TSTypeReference",
				typeName: {
					type: "Identifier",
					name: "SvgComponentProps",
				},
			},
		},
	};

	const updImports = [imports[1]];

	return tpl`
${updImports}
import type { SvgComponentProps } from "../types";
import { classCombine } from "@gaber32188/utils";
import * as styles from "../icon.module.css";

${interfaces}

function ${componentName}(${props}): JSX.Element {
  return ${jsx};
}

${exports}`;
};

module.exports = propTypesTemplate;
