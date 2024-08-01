type whiteSpace = "\n" | "\t" | " ";

type TrimLeft<S extends string> = S extends `${whiteSpace}${infer A}` ? TrimLeft<A> : S;
