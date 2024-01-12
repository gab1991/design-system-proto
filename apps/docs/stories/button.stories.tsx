import type { Meta, StoryObj } from "@storybook/react";
import { Button, LinkKek } from "@design-system/button";
import { Container } from "@design-system/container";

const meta: Meta<typeof Button> = {
	component: Button,
	title: "Button",
	argTypes: {
		type: {
			control: { type: "radio" },
			options: ["button", "submit", "reset"],
		},
	},
};

export default meta;

type Story = StoryObj<typeof Button>;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/react/api/csf
 * to learn how to use render functions.
 */
export const Primary: Story = {
	render: (props) => (
		<Button {...props} onClick={(): void => {}}>
			Hello
		</Button>
	),
};

export const Secondary: Story = {
	render: () => (
		<LinkKek
			onClick={(): void => {
				throw new Error("from Secondary");
			}}>
			Hello
		</LinkKek>
	),
};

export const ContainerStory: Story = {
	render: (props) => <Container {...props}>LOL</Container>,
};
