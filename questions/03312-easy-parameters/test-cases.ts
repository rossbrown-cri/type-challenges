import type { Equal, Expect } from "@type-challenges/utils"

const foo = (arg1: string, arg2: number): void => {
	console.log(arg1, arg2)
}
const bar = (arg1: boolean, arg2: { a: "A" }): void => {
	console.log(arg1, arg2)
}
const baz = (): void => {}

type cases = [
	Expect<Equal<MyParameters<typeof foo>, [string, number]>>,
	Expect<Equal<MyParameters<typeof bar>, [boolean, { a: "A" }]>>,
	Expect<Equal<MyParameters<typeof baz>, []>>
]
