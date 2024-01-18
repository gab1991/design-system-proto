import type { SVGProps } from "react";

export type Size = "s" | "m" | "l";

export interface SvgComponentProps extends SVGProps<SVGSVGElement> {
	size?: Size;
}
