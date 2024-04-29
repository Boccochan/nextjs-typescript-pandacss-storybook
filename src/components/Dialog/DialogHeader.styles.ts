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
        paddingX: "3",
        paddingY: "3",
        fontSize: "md",
      },
      sm: {
        paddingX: "4",
        paddingY: "4",
        fontSize: "lg",
      },
      md: {
        paddingX: "5",
        paddingY: "5",
        fontSize: "xl",
      },
      lg: {
        paddingX: "6",
        paddingY: "6",
        fontSize: "2xl",
      },
      xl: {
        paddingX: "7",
        paddingY: "7",
        fontSize: "3xl",
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
