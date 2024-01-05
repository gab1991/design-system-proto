import * as classes from './button.module.css';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	children: React.ReactNode;
}

export function Button({ children, ...other }: ButtonProps): JSX.Element {
	return (
		<button className={classes.button} type="button" {...other}>
			{children}
		</button>
	);
}

Button.displayName = 'Button';
