import React from "react";
import type { IconType } from "react-icons";

import { Spinner } from "@/components/Spinner";

import type { ButtonVariants } from "./Button.styles";
import { styles } from "./Button.styles";

type ButtonProps = React.JSX.IntrinsicElements["button"] & {
  /**
   * The color of the component.
   */
  color?: ButtonVariants["color"]; // For storybook

  /**
   * The size of the component.
   */
  size?: ButtonVariants["size"]; // For storybook

  /**
   * The width of input. The width of the Input component can be fixed.
   */
  width?: ButtonVariants["width"]; // For storybook

  /**
   * The variant to use.
   */
  variants?: ButtonVariants["variants"];

  /**
   * The label of the button.
   */
  label: string;

  /**
   * If true, the component is disabled and show a spinner.
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
  (
    { color, size, label, disabled, loading, Icon, width, variants, ...rest },
    ref,
  ) => (
    <button
      ref={ref}
      disabled={loading || disabled}
      aria-disabled={loading || disabled}
      className={styles.button({ color, size, width, variants })}
      {...rest}
    >
      {loading && (
        <div className={styles.spinner}>
          <Spinner
            size={size}
            color={variants === "contained" ? "light" : color}
          />
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
