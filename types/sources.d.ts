declare module "*.avif" {
	const source: string;
	export default source;
}

declare module "*.bmp" {
	const source: string;
	export default source;
}

declare module "*.gif" {
	const source: string;
	export default source;
}

declare module "*.jpg" {
	const source: string;
	export default source;
}

declare module "*.jpeg" {
	const source: string;
	export default source;
}

declare module "*.png" {
	const source: string;
	export default source;
}

declare module "*.webp" {
	const source: string;
	export default source;
}

declare module "*.svg" {
	import type * as React from "react";

	export const ReactComponent: React.FunctionComponent<React.SVGProps<SVGSVGElement> & { title?: string }>;

	const source: string;
	export default source;
}

declare module "*.module.css" {
	interface IClassNames {
		[className: string]: string;
	}
	const classNames: IClassNames;
	export = classNames;
}

declare module "*.module.scss" {
	const classes: Readonly<Record<string, string>>;
	export default classes;
}

declare module "*.module.sass" {
	const classes: Readonly<Record<string, string>>;
	export default classes;
}
