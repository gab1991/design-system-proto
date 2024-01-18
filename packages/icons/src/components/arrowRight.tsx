import type { Ref, SVGProps } from "react";
import { forwardRef } from "react";
import type { Size } from "../constants";
import * as styles from "../icon.module.css";

interface SvgComponentProps extends SVGProps<SVGSVGElement> {
	size?: Size;
}
function SvgArrowRight(props: SvgComponentProps, ref: Ref<SVGSVGElement>): JSX.Element {
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
			<path d="m15.651 16.585 4.463-3.826a1 1 0 0 0 0-1.518l-4.463-3.826A1 1 0 0 0 14 8.174V11H5a1 1 0 0 0-1 1 1 1 0 0 0 1 1h9v2.826a1 1 0 0 0 1.651.759" />
		</svg>
	);
}
const ForwardRef = forwardRef(SvgArrowRight);
export default ForwardRef;
