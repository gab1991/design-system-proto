const propTypesTemplate = ({ imports, interfaces, componentName, props, jsx, exports }, { tpl }) => {
	return tpl`${imports}
${interfaces}

function ${componentName}(${props}): JSX.Element {
  return ${jsx};
}

${exports}
  `;
};

module.exports = propTypesTemplate;
