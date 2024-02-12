import React from "react";
import type { IconType } from "react-icons";

import type { ButtonVariants } from "./IconButton.styles";
import { styles } from "./IconButton.styles";

type Props = ButtonVariants &
  Omit<
    React.JSX.IntrinsicElements["button"],
    // The title attribute is discourage by HTML spec.
    // https://html.spec.whatwg.org/multipage/dom.html#the-title-attribute
    keyof ButtonVariants | "aria-label" | "title"
  >;

type IconButtonProps = Props & {
  loading?: boolean;
  Icon: IconType;
  // The aria-lable must be set for screen readers.
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
