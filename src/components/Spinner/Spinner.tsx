import { type SpinnerVariants, styles } from "./Spinner.styles";

type Spinner = {
  /**
   * The color of 'basic' is changed the color in dark mode. But the other fixed colors, such as 'light',
   * will not be changed in dark mode. You can use those fixed colors if the background color is fixed.
   */
  color?: SpinnerVariants["color"];

  /**
   * The size of the component.
   */
  size?: SpinnerVariants["size"];
};

export const Spinner = ({ size, color }: Spinner) => (
  <div
    className={styles.spinner({ size, color })}
    role="alert"
    aria-label="loading"
  />
);
