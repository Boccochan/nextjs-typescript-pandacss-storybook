import { cva, type RecipeVariantProps } from "#/styled-system/css";

const errorMessage = cva({
  base: {
    color: "danger",
    display: "inline-block",
  },
  variants: {
    size: {
      xs: {
        fontSize: "0.6rem",
        height: "0.6rem",
      },
      sm: {
        fontSize: "0.7rem",
        height: "0.7rem",
      },
      md: {
        fontSize: "0.8rem",
        height: "0.8rem",
      },
      lg: {
        fontSize: "0.9rem",
        height: "0.9rem",
      },
      xl: {
        fontSize: "1.0rem",
        height: "1.0rem",
      },
    },
    invisible: {
      true: {
        visibility: "hidden",
      },
    },
  },
  defaultVariants: {
    size: "md",
  },
});

export const styles = {
  errorMessage,
};

export type ErrorMessageVariants = NonNullable<
  RecipeVariantProps<typeof errorMessage>
>;
