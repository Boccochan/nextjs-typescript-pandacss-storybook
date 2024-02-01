export type TypeCvaVariables<T extends (...args: any[]) => any> = NonNullable<
  Parameters<T>[number]
>;
