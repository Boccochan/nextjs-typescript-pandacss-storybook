import React from "react";

import { Spinner } from "@/components/Spinner";
import { css } from "#/styled-system/css";

import type { ButtonVariants } from "./Button.styles";
import { button, labelCva } from "./Button.styles";
type Props = ButtonVariants & React.JSX.IntrinsicElements["button"];

type ButtonProps = Props & {
  label: string;
  loading?: boolean;
};

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ color, size, label, disabled, loading, ...rest }, ref) => (
    <button
      ref={ref}
      disabled={loading || disabled}
      {...rest}
      className={button({ color, size })}
    >
      {loading && (
        <div
          className={css({
            position: "absolute",
            inset: "0",
            margin: "auto",
            width: "fit-content",
            height: "full",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          })}
        >
          <Spinner />
        </div>
      )}
      <span className={labelCva({ loading })}>{label}</span>
    </button>
  ),
);

Button.displayName = "Button";
