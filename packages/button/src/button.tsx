import * as styles from "./button.module.css";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	children: React.ReactNode;
}
export function Button({ children, ...other }: ButtonProps): JSX.Element {
	return (
		<button className={styles.button} type="button" {...other}>
			{children}
		</button>
	);
}

export function LinkKek({ children, ...other }: React.AnchorHTMLAttributes<HTMLAnchorElement>): JSX.Element {
	const job_kek = (
		<table>
			<tr />
		</table>
	);

	console.log(job_kek);

	return (
		<a className={styles.link} {...other}>
			{children}
		</a>
	);
}

export function add(a: number, b: number): number {
	return a + b;
}
