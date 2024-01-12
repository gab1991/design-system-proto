import * as styles from "./container.module.css";

export interface ContainerProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	children: React.ReactNode;
}

export function Container(props: ContainerProps): JSX.Element {
	return <div className={styles.container}>{props.children}</div>;
}
