import type { Ref, SVGProps } from "react";
import { forwardRef } from "react";
import type { Size } from "../constants";
import * as styles from "../icon.module.css";

interface SvgComponentProps extends SVGProps<SVGSVGElement> {
	size?: Size;
}
function SvgArrowLeft(props: SvgComponentProps, ref: Ref<SVGSVGElement>): JSX.Element {
	const { className = "", size = "s", ...restProps } = props;
	return (
		<svg
			data-name="Layer 1"
			fill="currentColor"
			stroke="#000"
			viewBox="0 0 24 24"
			xmlns="http://www.w3.org/2000/svg"
			{...restProps}
			className={`${styles.svg} ${className}`}
			data-size={size}
			ref={ref}
		>
			<path d="m8.349 7.415-4.463 3.826a1 1 0 0 0 0 1.518l4.463 3.826A1 1 0 0 0 10 15.826V13h9a1 1 0 0 0 1-1 1 1 0 0 0-1-1h-9V8.174a1 1 0 0 0-1.651-.759Z" />
		</svg>
	);
}
const ForwardRef = forwardRef(SvgArrowLeft);
export default ForwardRef;
