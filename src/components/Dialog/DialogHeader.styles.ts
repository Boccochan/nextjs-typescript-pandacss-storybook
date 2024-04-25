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
        paddingY: "2",
      },
      sm: {
        paddingX: "5",
        paddingY: "2.5",
      },
      md: {
        paddingX: "6",
        paddingY: "3",
      },
      lg: {
        paddingX: "7",
        paddingY: "3.5",
      },
      xl: {
        paddingX: "8",
        paddingY: "4",
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
