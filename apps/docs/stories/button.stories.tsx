import type { Meta, StoryObj } from "@storybook/react";
import { Button, Container } from "@acme/ui";

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
		<Button
			{...props}
			onClick={(): void => {
				console.log("clicked");
			}}>
			Hello
		</Button>
	),
};

export const Secondary: Story = {
	render: (props) => (
		<Button
			{...props}
			onClick={(): void => {
				throw new Error("from Secondary");
			}}>
			Hello
		</Button>
	),

	args: {
		style: {
			color: "blue",
			backgroundColor: "red",
			padding: 10,
			borderRadius: 10,
		},
	},
};

export const ContainerStory: Story = {
	render: (props) => <Container {...props}>LOL</Container>,
};
