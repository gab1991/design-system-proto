import type { SVGProps , Ref} from "react";
import { forwardRef } from "react";

function SvgArrowRight(
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>
): JSX.Element {
  return (
    <svg
      data-name="Layer 1"
      fill="currentColor"
      height={24}
      ref={ref}
      viewBox="0 0 24 24"
      width={24}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="m15.651 16.585 4.463-3.826a1 1 0 0 0 0-1.518l-4.463-3.826A1 1 0 0 0 14 8.174V11H5a1 1 0 0 0-1 1 1 1 0 0 0 1 1h9v2.826a1 1 0 0 0 1.651.759" />
    </svg>
  );
}
const ForwardRef = forwardRef(SvgArrowRight);
export default ForwardRef;
