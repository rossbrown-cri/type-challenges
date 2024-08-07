type IsNDivByX<N extends unknown[], X extends unknown[]> =
    N["length"] extends X | 0
        ? true
        : N extends [...infer S, ...X]
            ? IsNDivByX<S, X>
            : false;

type FizzBuzz<N extends number> = _FizzBuzz<Adjust<N>> extends [infer _, ...infer B]
    ? B
    : []

type _FizzBuzz<N extends number, A extends string[]=[]> = 
    A extends {length: infer L extends number}
        ? L extends N
            ? A
            : _FizzBuzz<N, [...A, `${
                    IsNDivByX<Build<L>,Build<3>> | IsNDivByX<Build<L>,Build<5>> extends false ? L : ""
                }${
                    IsNDivByX<Build<L>, Build<3>> extends true ? "Fizz" : ""
                }${
                    IsNDivByX<Build<L>, Build<5>> extends true ? "Buzz" : ""
                }`]>
        : [];
    

type Adjust<N extends number> = [unknown, ...Build<N>]["length"] extends number
    ? [unknown, ...Build<N>]["length"]
    : 0;
