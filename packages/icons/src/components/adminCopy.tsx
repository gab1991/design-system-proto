import type { Ref} from "react";
import { forwardRef } from "react";
import { classCombine } from "@gaber32188/utils";
import type { SvgComponentProps } from "../types";
import * as styles from "../icon.module.css";

function SvgAdminCopy({ className, size = "s", ...props }: SvgComponentProps, ref: Ref<SVGSVGElement>): JSX.Element {
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
			<circle cx={12} cy={7} r={4} />
			<path d="M12 13a7 7 0 0 0-6.425 4.218A2 2 0 0 0 7.422 20H12ZM21 18v-4l-1.931 1.448L17 12l-2.069 3.448L13 14v4zM13 19h8v2h-8z" />
		</svg>
	);
}
const ForwardRef = forwardRef(SvgAdminCopy);
export default ForwardRef;
