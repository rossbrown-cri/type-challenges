interface FakePromise<T>{
    then: (arg0: (arg0: T) => any) => any
}
type PromiseAndCo<T> = Promise<T> | FakePromise<T>

type MyAwaited<T extends PromiseAndCo<any>> = T extends PromiseAndCo<infer U>
	? U extends PromiseAndCo<any>
		? MyAwaited<U>
		: U
	: never