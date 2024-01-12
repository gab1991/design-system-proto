import { add, Button } from "@design-system/button";

export function App(): JSX.Element {
	console.log(add(1, 2));

	return (
		<main>
			<Button>example</Button>
			<h1>Test</h1>
		</main>
	);
}
