type CamelCase<S extends string> = S extends `${infer A}${infer B}`
    ? A extends "_"
        ? B extends `${infer C}${infer D}` ? `${Capitalize<C>}${CamelCase<D>}` : B
        : S extends `${infer E}${infer F}` ? `${Lowercase<E>}${CamelCase<F>}` : A
    : S