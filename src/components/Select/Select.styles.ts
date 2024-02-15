import { css, cva } from "#/styled-system/css";

const wrapper = css({
  position: "relative",
  width: "fit-content",
  _after: {
    position: "absolute",
    content: '""',
    width: "10px",
    height: "10px",
    top: "50%",
    right: "10px",
    transform: "translateY(-50%)",
    bg: "blue",
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
