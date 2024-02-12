import React from "react";
import type { IconType } from "react-icons";

import type { ButtonVariants } from "./IconButton.styles";
import { styles } from "./IconButton.styles";

type Props = ButtonVariants &
  Omit<
    React.JSX.IntrinsicElements["button"],
    // The title attribute is discourage HTML spec.
    // https://html.spec.whatwg.org/multipage/dom.html#the-title-attribute
    keyof ButtonVariants | "aria-label" | "title"
  >;

type IconButtonProps = Props & {
  loading?: boolean;
  Icon: IconType;
  // The aria-lable must be set for screen readers.
  "aria-label": string;
};

/**
 * Icon button. You should avoid to use this button if users can
 * not know what will occure by clicking the icon. We should not
 * use tooltips for describing the icon since smartphones or screen
 * readers might not be able to find the tooltip.
 */
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
