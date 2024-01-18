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

export const General: Story = {
	render: () => (
		<div style={{ color: "red" }}>
			<Icons.ArrowLeft />
			<Icons.ArrowLeft size="m" />
			<Icons.ArrowLeft size="l" />
			<Icons.ArrowRight />
			<Icons.ArrowRight size="m" />
			<Icons.ArrowRight size="l" />
		</div>
	),
};
