export type TypeCva<T extends (...args: any[]) => any> = NonNullable<
  Parameters<T>[number]
>;
