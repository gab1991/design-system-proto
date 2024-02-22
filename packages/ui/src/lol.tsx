import styles from "./lol.module.css";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	children: React.ReactNode;
}

export function Lol({ children, ...other }: ButtonProps): JSX.Element {
	return (
		<button className={styles.button} type="submit" {...other}>
			{children}
		</button>
	);
}

Lol.displayName = "Lol";
