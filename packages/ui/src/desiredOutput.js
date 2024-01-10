import { jsx } from 'react/jsx-runtime';
import styles from './index.css';

function Button({ children, ...other }) {
	return jsx('button', { className: styles.button, type: 'button', ...other, children });
}
Button.displayName = 'Button';

export { Button };
//# sourceMappingURL=index.mjs.map
