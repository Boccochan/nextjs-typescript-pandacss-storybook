import React from "react";

import { Spinner } from "@/components/Spinner";

import type { ButtonVariants } from "./Button.styles";
import { styles } from "./Button.styles";

type Props = ButtonVariants &
  Omit<React.JSX.IntrinsicElements["button"], keyof ButtonVariants>;

type ButtonProps = Props & {
  label: string;
  loading?: boolean;
};

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ color, size, label, disabled, loading, ...rest }, ref) => (
    <button
      ref={ref}
      disabled={loading || disabled}
      aria-disabled={loading || disabled}
      {...rest}
      className={styles.button({ color, size })}
    >
      {loading && (
        <div className={styles.spinner}>
          <Spinner />
        </div>
      )}
      <span className={styles.label({ loading })}>{label}</span>
    </button>
  ),
);

Button.displayName = "Button";
