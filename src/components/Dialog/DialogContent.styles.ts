import type { RecipeVariantProps } from "#/styled-system/css";
import { cva } from "#/styled-system/css";

const content = cva({
  base: {
    position: "relative",
  },
  variants: {
    size: {
      xs: {
        paddingX: "4",
        paddingBottom: "4",
      },
      sm: {
        paddingX: "5",
        paddingBottom: "5",
      },
      md: {
        paddingX: "6",
        paddingBottom: "6",
      },
      lg: {
        paddingX: "7",
        paddingBottom: "7",
      },
      xl: {
        paddingX: "8",
        paddingBottom: "8",
      },
    },
  },
  defaultVariants: {
    size: "md",
  },
});

export const styles = {
  content,
};

export type DialogFooterVariants = NonNullable<
  RecipeVariantProps<typeof content>
>;
