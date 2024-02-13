import React from "react";
import type { IconType } from "react-icons";

import { Spinner } from "@/components/Spinner";

import type { ButtonVariants } from "./Button.styles";
import { styles } from "./Button.styles";

type Props = Omit<React.JSX.IntrinsicElements["button"], keyof ButtonVariants>;

type ButtonProps = Props & {
  /**
   * The color of the component.
   */
  color?: Required<ButtonVariants["color"]>; // For storybook

  /**
   * The size of the component.
   */
  size?: Required<ButtonVariants["size"]>; // For storybook

  /**
   * The label of the button.
   */
  label: string;

  /**
   * If true, the component is disabled.
   */
  loading?: boolean;

  /**
   * The component of react-icons.
   */
  Icon?: IconType;
};

/**
 * - Support all button tag's props.
 */
export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ color, size, label, disabled, loading, Icon, ...rest }, ref) => (
    <button
      ref={ref}
      disabled={loading || disabled}
      aria-disabled={loading || disabled}
      className={styles.button({ color, size })}
      {...rest}
    >
      {loading && (
        <div className={styles.spinner}>
          <Spinner size={size} />
        </div>
      )}
      <div className={styles.labelWrapper({ loading })}>
        {Icon && <Icon aria-hidden="true" className={styles.labelIcon} />}
        <span>{label}</span>
      </div>
    </button>
  ),
);

Button.displayName = "Button";
