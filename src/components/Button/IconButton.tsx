import React from "react";
import type { IconType } from "react-icons";

import type { ButtonVariants } from "./IconButton.styles";
import { styles } from "./IconButton.styles";

type Props = Omit<
  React.JSX.IntrinsicElements["button"],
  keyof ButtonVariants | "aria-label"
>;

type IconButtonProps = Props & {
  /**
   * The size of the component.
   */
  size?: Required<ButtonVariants["size"]>; // For storybook

  /**
   * If true, the component is disabled.
   */
  loading?: boolean;

  /**
   * The component of react-icons.
   */
  Icon: IconType;

  /**
   * This label is for screen reader's users. The aria-label will be read by screen reader.
   */
  "aria-label": string;
};

/**
 * - Support all button tag's props.
 * - IconButton does not support tooltip because of accessibility.
 * Smartphone, table and screen readers users will not notice the
 * tooltips. If you think IconButton needs tooltips, you should use
 * basic button or other component.
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
