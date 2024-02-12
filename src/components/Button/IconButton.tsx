import React from "react";
import type { IconType } from "react-icons";

import type { ButtonVariants } from "./IconButton.styles";
import { styles } from "./IconButton.styles";

type Props = ButtonVariants &
  Omit<
    React.JSX.IntrinsicElements["button"],
    keyof ButtonVariants | "aria-label"
  >;

type IconButtonProps = Props & {
  loading?: boolean;
  Icon: IconType;
  // The aria-lable must be set for screen reader.
  "aria-label": string;
};

export const IconButton = React.forwardRef<HTMLButtonElement, IconButtonProps>(
  ({ Icon, size, disabled, loading, ...rest }, ref) => (
    <button
      ref={ref}
      disabled={disabled || loading}
      {...rest}
      className={styles.button({ size })}
    >
      {<Icon />}
    </button>
  ),
);

IconButton.displayName = "IconButton";
