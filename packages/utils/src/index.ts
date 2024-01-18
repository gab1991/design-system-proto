/** Combines multiple class names into a single string */
export const classCombine = (...classes: (string | undefined)[]) => {
	return classes.filter(Boolean).join(" ");
};
