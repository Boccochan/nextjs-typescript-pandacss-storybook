import { spinner, type SpinnerVariants } from "./Spinner.styles";

export const Spinner = ({ size }: SpinnerVariants) => (
  <div className={spinner({ size })} role="alert" aria-label="loading" />
);
