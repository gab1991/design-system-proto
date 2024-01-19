import type { Meta, StoryObj } from "@storybook/react";
import * as Icons from "@gaber32188/icons";

const meta: Meta = {
	title: "Icons",
	argTypes: {},
};

export default meta;

type Story = StoryObj;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/react/api/csf
 * to learn how to use render functions.
 */

type Keys = keyof typeof Icons;
const IconKeys = Object.keys(Icons) as Keys[];
const ComponentArray = IconKeys.map((key) => Icons[key]);

export const General: Story = {
	render: () => (
		<div style={{ color: "red" }}>
			{ComponentArray.map((Icon, index) => (
				<>
					<Icon key={index + "s"} />
					<Icon key={index + "m"} size="m" />
					<Icon key={index + "l"} size="l" />
				</>
			))}
		</div>
	),
};
