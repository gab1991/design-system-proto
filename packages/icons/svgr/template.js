const propTypesTemplate = (ast, context) => {
	const { tpl } = context;
	const { imports, interfaces, componentName, props, jsx, exports } = ast;

	imports[0].specifiers.push({
		type: "ImportSpecifier",
		local: {
			type: "Identifier",
			name: "SVGProps",
		},
		imported: {
			type: "Identifier",
			name: "SVGProps",
		},
	});

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
import type { Size } from "../constants";
import * as styles from "../icon.module.css";

interface SvgComponentProps extends SVGProps<SVGSVGElement> {
	size?: Size;
}

function ${componentName}(${props}): JSX.Element {
	const { className = "", size = "s", ...restProps } = props;
  return ${jsx};
}

${exports}`;
};

module.exports = propTypesTemplate;
