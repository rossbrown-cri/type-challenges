type MyExclude<T, U extends T> = {[key in keyof T]: U extends key ? never : T[key]}
