import type { Meta, StoryObj } from "@storybook/react";
import * as Collapsible from "@design-system/collapsible";
import styles from "./collapsible.module.css";

import "@design-system/styles/dist/index.css";

const meta: Meta = {
	title: "Collapsible",
};

export default meta;

type Story = StoryObj;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/react/api/csf
 * to learn how to use render functions.
 */
export const Primary: Story = {
	render: () => (
		<Collapsible.Root>
			<Collapsible.Trigger asChild className={styles.trigger}>
				<button className="IconButton" type="button">
					Click me
				</button>
			</Collapsible.Trigger>
			<Collapsible.Content className={styles.content}>
				<button type="button">First option</button>
				<button type="button">Second option</button>
				<button type="button">Third option</button>
			</Collapsible.Content>
		</Collapsible.Root>
	),
};
