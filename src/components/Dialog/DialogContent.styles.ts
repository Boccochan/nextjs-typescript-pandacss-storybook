import type { RecipeVariantProps } from "#/styled-system/css";
import { cva } from "#/styled-system/css";

const content = cva({
  base: {
    position: "relative",
  },
  variants: {
    size: {
      xs: {
        paddingX: "3",
        paddingBottom: "3",
      },
      sm: {
        paddingX: "4",
        paddingBottom: "4",
      },
      md: {
        paddingX: "5",
        paddingBottom: "5",
      },
      lg: {
        paddingX: "6",
        paddingBottom: "6",
      },
      xl: {
        paddingX: "7",
        paddingBottom: "7",
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
