import type { Ref} from "react";
import { forwardRef } from "react";
import type { SvgComponentProps } from "../types";
import * as styles from "../icon.module.css";

function SvgAdd(props: SvgComponentProps, ref: Ref<SVGSVGElement>): JSX.Element {
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
			<path d="M19 12a1 1 0 0 1-1 1h-5v5a1 1 0 0 1-2 0v-5H6a1 1 0 0 1 0-2h5V6a1 1 0 0 1 2 0v5h5a1 1 0 0 1 1 1" />
		</svg>
	);
}
const ForwardRef = forwardRef(SvgAdd);
export default ForwardRef;
