type Includes<T extends readonly any[], U> = U extends T[number] ? true : false

type isPillarMen = Includes<[{ readonly a: 'A' }], { a: 'A' }>
