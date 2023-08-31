type ToPrimitive<X extends {}> = {-readonly [key in keyof X]: key}
