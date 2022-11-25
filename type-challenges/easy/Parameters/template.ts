type MyParameters<T extends (...args: any[]) => any> = T extends (
  ...args: infer ARG
) => any
  ? [...ARG]
  : never
