/// <reference types="../../../types/sources.d.ts" />;
import * as styles from './button.module.css';

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

Button.displayName = 'Button';
