import { cva, type RecipeVariantProps } from "#/styled-system/css";

const button = cva({
  base: {
    cursor: "pointer",
    whiteSpace: "nowrap",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: {
      base: "icon",
    },
    bg: {
      base: "body.bg",
      _hover: "icon.hover",
    },
    _active: {
      opacity: "0.8",
    },
    _disabled: {
      opacity: 0.7,
      pointerEvents: "none",
    },
  },
  variants: {
    size: {
      xs: {
        rounded: "xs",
        fontSize: "0.8rem",
        width: "1.4rem",
        height: "1.4rem",
      },
      sm: {
        rounded: "sm",
        fontSize: "1rem",
        width: "1.6rem",
        height: "1.6rem",
      },
      md: {
        rounded: "md",
        fontSize: "1.2rem",
        width: "1.8rem",
        height: "1.8rem",
      },
      lg: {
        rounded: "lg",
        fontSize: "1.4rem",
        width: "2rem",
        height: "2rem",
      },
      xl: {
        rounded: "xl",
        fontSize: "1.6rem",
        width: "2.2rem",
        height: "2.2rem",
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
