import React from "react";
import type { IconType } from "react-icons";

import type { ButtonVariants } from "./IconButton.styles";
import { styles } from "./IconButton.styles";

type Props = ButtonVariants &
  Omit<React.JSX.IntrinsicElements["button"], keyof ButtonVariants>;

type IconButtonProps = Props & {
  loading?: boolean;
  Icon: IconType;
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
