import { cva, type RecipeVariantProps } from "#/styled-system/css";

const button = cva({
  base: {
    cursor: "pointer",
    whiteSpace: "nowrap",
    _disabled: {
      opacity: 0.7,
      pointerEvents: "none",
    },
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: {
      base: "icon",
      _hover: "icon.hover",
    },
  },
  variants: {
    size: {
      sm: {
        rounded: "sm",
        fontSize: "2rem",
        width: "2rem",
        height: "2rem",
      },
      md: {
        rounded: "md",
        fontSize: "2.4rem",
        width: "2.4rem",
        height: "2.4rem",
      },
      lg: {
        rounded: "lg",
        fontSize: "2.8rem",
        width: "2.8rem",
        height: "2.8rem",
      },
      xl: {
        rounded: "xl",
        fontSize: "3.2rem",
        width: "3.2rem",
        height: "3.2rem",
      },
    },
  },
  defaultVariants: {
    size: "md",
  },
});

export const styles = {
  button,
};

export type ButtonVariants = NonNullable<RecipeVariantProps<typeof button>>;
