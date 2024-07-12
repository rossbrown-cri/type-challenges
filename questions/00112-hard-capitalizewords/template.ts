
// // ! This solution is too recursive
// type CapitalizeWords<S extends string, C extends boolean = true> = 
//     S extends `${infer A}${infer B}`
//         ? Lowercase<A> extends Uppercase<A>
//             ? `${A}${CapitalizeWords<B, true>}` 
//             : C extends true 
//                 ? `${Uppercase<A>}${CapitalizeWords<B, false>}` 
//                 : `${A}${CapitalizeWords<B, false>}`
//         : S

type CapitalizeWords<S extends string, W extends string = ""> =
    S extends `${infer A}${infer B}`
    ? Lowercase<A> extends Uppercase<A>
        ? `${Capitalize<W>}${A}${CapitalizeWords<B>}`
        : CapitalizeWords<B, `${W}${A}`>
    : Capitalize<W>

// type b = CapitalizeWords<'aa!bb@cc#dd$ee%ff^gg&hh*ii(jj)kk_ll+mm{nn}oo|pp🤣qq'>
// type b = CapitalizeWords<'aa!bb@cc#dd$ee%ff^ggo|pp🤣qq'>