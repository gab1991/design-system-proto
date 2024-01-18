const propTypesTemplate = (ast, context) => {
	const { tpl } = context;
	const { imports, interfaces, componentName, props, jsx, exports } = ast;

	props[0] = {
		type: "Identifier",
		name: "props",
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

	const propSpreadAttrib = {
		type: "JSXSpreadAttribute",
		argument: {
			type: "Identifier",
			name: "restProps",
		},
	};
	jsx.openingElement.attributes.push(propSpreadAttrib);

	return tpl`${imports}
${interfaces}
import type { SvgComponentProps } from "../types";
import * as styles from "../icon.module.css";

function ${componentName}(${props}): JSX.Element {
	const { className = "", size = "s", ...restProps } = props;
  return ${jsx};
}

${exports}`;
};

module.exports = propTypesTemplate;
