import type { RecipeVariantProps } from "#/styled-system/css";
import { cva } from "#/styled-system/css";

const footer = cva({
  base: {
    display: "flex",
    flexDir: "row",
    justifyContent: "flex-end",
  },
  variants: {
    size: {
      xs: {
        paddingX: "4",
        paddingY: "2",
        gap: "1",
      },
      sm: {
        paddingX: "5",
        paddingY: "2.5",
        gap: "2",
      },
      md: {
        paddingX: "6",
        paddingY: "3",
        gap: "3",
      },
      lg: {
        paddingX: "7",
        paddingY: "3.5",
        gap: "4",
      },
      xl: {
        paddingX: "8",
        paddingY: "4",
        gap: "5",
      },
    },
  },
});

export const styles = { footer };

export type DialogFooterVariants = NonNullable<
  RecipeVariantProps<typeof footer>
>;
