import type { SVGProps, Ref } from "react";
import { forwardRef } from "react";

function SvgArrowLeft(props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>): JSX.Element {
	return (
		<svg
			data-name="Layer 1"
			fill="currentColor"
			height={24}
			ref={ref}
			stroke="#000"
			viewBox="0 0 24 24"
			width={24}
			xmlns="http://www.w3.org/2000/svg"
			{...props}
		>
			<path d="m8.349 7.415-4.463 3.826a1 1 0 0 0 0 1.518l4.463 3.826A1 1 0 0 0 10 15.826V13h9a1 1 0 0 0 1-1 1 1 0 0 0-1-1h-9V8.174a1 1 0 0 0-1.651-.759Z" />
		</svg>
	);
}
const ForwardRef = forwardRef(SvgArrowLeft);
export default ForwardRef;
