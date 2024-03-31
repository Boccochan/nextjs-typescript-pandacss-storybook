import { cva, type RecipeVariantProps } from "#/styled-system/css";

const inputIcon = cva({
  base: {
    height: "100%",
    paddingX: "2",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "inputIcon",
  },
  variants: {
    size: {
      xs: {
        fontSize: "lg",
        paddingX: "1",
      },
      sm: {
        fontSize: "xl",
        paddingX: "1",
      },
      md: {
        fontSize: "2xl",
        paddingX: "1",
      },
      lg: {
        fontSize: "3xl",
        paddingX: "1",
      },
      xl: {
        fontSize: "4xl",
        paddingX: "1",
      },
    },
  },
  defaultVariants: {
    size: "md",
  },
});

export const styles = { inputIcon };

export type InputIconVariants = NonNullable<
  RecipeVariantProps<typeof inputIcon>
>;
