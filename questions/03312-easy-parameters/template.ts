type MyParameters<T extends Function> = T extends (...args: infer U) => any
	? U
	: void