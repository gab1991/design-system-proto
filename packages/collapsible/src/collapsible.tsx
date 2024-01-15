import { forwardRef } from "react";
import * as RadixCollapsible from "@radix-ui/react-collapsible";
import * as styles from "./collapsible.module.css";

export const Trigger = forwardRef<HTMLButtonElement, React.ComponentProps<typeof RadixCollapsible.Trigger>>(
	(props, ref) => {
		const { className, ...rest } = props;
		return <RadixCollapsible.Trigger className={`${styles.trigger} ${className || ""}`} ref={ref} {...rest} />;
	},
);

Trigger.displayName = "CollapsibleTrigger";

export const Content = forwardRef<HTMLDivElement, React.ComponentProps<typeof RadixCollapsible.Content>>(
	(props, ref) => {
		const { className, ...rest } = props;
		return <RadixCollapsible.Content className={`${styles.content} ${className || ""}`} ref={ref} {...rest} />;
	},
);

Content.displayName = "CollapsibleContent";

export const Root = RadixCollapsible.Root;

Root.displayName = "CollapsibleRoot";
