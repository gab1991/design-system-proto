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

export function Container(props: { children: React.ReactNode }): JSX.Element {
	return <div className={styles.container}>{props.children}</div>;
}
