import type { RecipeVariantProps } from "#/styled-system/css";
import { css, cva } from "#/styled-system/css";

//svaへの置き換えを検討

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
    width: {
      sm: { width: "12rem" },
      md: { width: "14rem" },
      lg: { width: "16rem" },
      xl: { width: "18rem" },
      full: { width: "100%" },
      auto: { width: "auto" },
    },
  },
  defaultVariants: {
    width: "auto",
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
    padding: "1px 2rem 1px 1rem",
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
        minWidth: "12rem",
        height: "2rem",
      },
      md: {
        px: "4",
        rounded: "md",
        fontSize: "md",
        minWidth: "14rem",
        height: "2.4rem",
      },
      lg: {
        px: "5",
        rounded: "lg",
        fontSize: "lg",
        minWidth: "16rem",
        height: "2.8rem",
      },
      xl: {
        px: "6",
        rounded: "xl",
        fontSize: "xl",
        minWidth: "16rem",
        height: "3.2rem",
      },
    },
    width: {
      sm: { width: "12rem" },
      md: { width: "14rem" },
      lg: { width: "16rem" },
      xl: { width: "18rem" },
      full: { width: "100%" },
      auto: { width: "auto" },
    },
  },
  defaultVariants: {
    size: "md",
    width: "auto",
  },
});

export const option = css({
  padding: "3rem",
  color: "red",
});

export const styles = {
  select,
  wrapper,
  option,
};

export type SelectVariants = NonNullable<RecipeVariantProps<typeof select>>;
