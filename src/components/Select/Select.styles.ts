import { cva } from "#/styled-system/css";

const wrapper = cva({
  base: {
    position: "relative",
    width: "fit-content",
    _after: {
      position: "absolute",
      content: '""',
      top: "50%",
      right: "10px",
      transform: "translateY(-50%)",
      width: "0",
      height: "0",
      borderLeft: "6px solid transparent",
      borderRight: "6px solid transparent",
      borderTopColor: "icon",
      borderTopWidth: "8px",
      borderTopStyle: "solid",
      pointerEvents: "none",
    },
  },
  variants: {
    disabled: {
      true: {
        opacity: "0.4",
      },
    },
  },
});

const select = cva({
  base: {
    borderColor: "body.border",
    borderWidth: "1px",
    borderRadius: "md",
    bg: "body.bg",
    color: "body.text",
    appearance: "none",
    padding: "1px 2rem",
    _disabled: {
      opacity: "0.7",
      pointerEvents: "none",
    },
  },
  variants: {
    size: {
      sm: {
        px: "3",
        rounded: "sm",
        fontSize: "sm",
        minWidth: "3rem",
        height: "2rem",
      },
      md: {
        px: "4",
        rounded: "md",
        fontSize: "md",
        minWidth: "4rem",
        height: "2.4rem",
      },
      lg: {
        px: "5",
        rounded: "lg",
        fontSize: "lg",
        minWidth: "5rem",
        height: "2.8rem",
      },
      xl: {
        px: "6",
        rounded: "xl",
        fontSize: "xl",
        minWidth: "6rem",
        height: "3.2rem",
      },
    },
  },
  defaultVariants: {
    size: "md",
  },
});

export const styles = {
  select,
  wrapper,
};
