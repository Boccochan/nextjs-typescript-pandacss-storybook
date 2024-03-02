import { cva, type RecipeVariantProps } from "#/styled-system/css";

const label = cva({
  base: {
    color: "body.text",
  },
  variants: {
    size: {
      xs: {
        fontSize: "0.6rem",
      },
      sm: {
        fontSize: "0.7rem",
      },
      md: {
        fontSize: "0.8rem",
      },
      lg: {
        fontSize: "0.9rem",
      },
      xl: {
        fontSize: "1.0rem",
      },
    },
  },
  defaultVariants: {
    size: "md",
  },
});

export const styles = {
  label,
};

export type LabelVariants = NonNullable<RecipeVariantProps<typeof label>>;
