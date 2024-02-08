import React from "react";

import { Spinner } from "@/components/Spinner";

import type { ButtonVariants } from "./Button.styles";
import { styles } from "./Button.styles";

type Props = ButtonVariants &
  Omit<React.JSX.IntrinsicElements["button"], "onClick">;

type ButtonProps = Props & {
  label: string;
  loading?: boolean;
  onSubmit?: () => void;
};

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ color, size, label, disabled, loading, onSubmit, ...rest }, ref) => {
    const keydownHandler = (e: React.KeyboardEvent<HTMLButtonElement>) => {
      if (e.key === "Enter" && onSubmit) {
        onSubmit();
        e.preventDefault();
        return;
      }
    };

    return (
      <button
        ref={ref}
        disabled={loading || disabled}
        {...rest}
        className={styles.button({ color, size })}
        onKeyDown={keydownHandler}
        onClick={() => onSubmit && onSubmit()}
      >
        {loading && (
          <div className={styles.spinner}>
            <Spinner />
          </div>
        )}
        <span className={styles.label({ loading })}>{label}</span>
      </button>
    );
  },
);

Button.displayName = "Button";
