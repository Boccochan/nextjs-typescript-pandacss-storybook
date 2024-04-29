import type { RecipeVariantProps } from "#/styled-system/css";
import { css, cva } from "#/styled-system/css";

const header = cva({
  base: {
    display: "flex",
    justifyContent: "space-between",
    width: "100%",
    color: "body.text",
  },
  variants: {
    size: {
      xs: {
        paddingX: "4",
        paddingY: "3",
        fontSize: "lg",
      },
      sm: {
        paddingX: "5",
        paddingY: "4",
        fontSize: "xl",
      },
      md: {
        paddingX: "6",
        paddingY: "5",
        fontSize: "2xl",
      },
      lg: {
        paddingX: "7",
        paddingY: "6",
        fontSize: "3xl",
      },
      xl: {
        paddingX: "8",
        paddingY: "7",
        fontSize: "4xl",
      },
    },
  },
  defaultVariants: {
    size: "md",
  },
});

const title = css({
  fontWeight: "bold",
});

const icon = css({
  cursor: "pointer",
});

export const styles = {
  header,
  title,
  icon,
};

export type DialogHeaderVariants = NonNullable<
  RecipeVariantProps<typeof header>
>;
