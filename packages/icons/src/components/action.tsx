import type { Ref} from "react";
import { forwardRef } from "react";
import type { SvgComponentProps } from "../types";
import * as styles from "../icon.module.css";

function SvgAction(props: SvgComponentProps, ref: Ref<SVGSVGElement>): JSX.Element {
	const { className = "", size = "s", ...restProps } = props;
	return (
		<svg
			data-name="Layer 1"
			fill="currentColor"
			viewBox="0 0 24 24"
			xmlns="http://www.w3.org/2000/svg"
			{...restProps}
			className={`${styles.svg} ${className}`}
			data-size={size}
			ref={ref}
		>
			<path d="M9.012 23a1 1 0 0 1-1-1L8 14H5.04a1 1 0 0 1-.809-1.588l8-11A1 1 0 0 1 14.04 2v8H17a1 1 0 0 1 .81 1.588l-7.989 11a1 1 0 0 1-.809.412M7 12h2a1 1 0 0 1 1 1l.008 5.928L15.038 12h-2a1 1 0 0 1-1-1V5.075Z" />
		</svg>
	);
}
const ForwardRef = forwardRef(SvgAction);
export default ForwardRef;
