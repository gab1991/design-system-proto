import type { Ref} from "react";
import { forwardRef } from "react";
import { classCombine } from "@gaber32188/utils";
import type { SvgComponentProps } from "../types";
import * as styles from "../icon.module.css";

function SvgAdd({ className, size = "s", ...props }: SvgComponentProps, ref: Ref<SVGSVGElement>): JSX.Element {
	return (
		<svg
			className={classCombine(styles.svg, className)}
			data-name="Layer 1"
			data-size={size}
			fill="currentColor"
			ref={ref}
			viewBox="0 0 24 24"
			xmlns="http://www.w3.org/2000/svg"
			{...props}
		>
			<path d="M19 12a1 1 0 0 1-1 1h-5v5a1 1 0 0 1-2 0v-5H6a1 1 0 0 1 0-2h5V6a1 1 0 0 1 2 0v5h5a1 1 0 0 1 1 1" />
		</svg>
	);
}
const ForwardRef = forwardRef(SvgAdd);
export default ForwardRef;
