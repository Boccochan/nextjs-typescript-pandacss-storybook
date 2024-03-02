import type { ErrorMessageVariants } from "./ErrorMessage.styles";
import { styles } from "./ErrorMessage.styles";

type ErrorMessageProps = {
  /**
   * The size of the component.
   */
  size?: ErrorMessageVariants["size"];

  /**
   * The error message text.
   */
  text?: string;
};

export const ErrorMessage = (props: ErrorMessageProps) => {
  return (
    <span
      className={styles.errorMessage({
        size: props.size,
        invisible: !props.text,
      })}
    >
      {props.text}
    </span>
  );
};
