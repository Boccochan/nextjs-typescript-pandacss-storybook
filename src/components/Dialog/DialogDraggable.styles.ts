import type { RecipeVariantProps } from "#/styled-system/css";
import { cva } from "#/styled-system/css";

const dialog = cva({
  base: {
    rounded: "md",
    height: "10rem",
    width: "10rem",
    position: "fixed",
    zIndex: 10000,
    bg: "dialog.bg",
    boxShadow: "{colors.dialog.shadow}", // For some reasons, dialog.shadow does not work
  },
  variants: {
    size: {
      xs: {
        minWidth: "8.09rem",
        height: "5rem",
        fontSize: "xs",
        rounded: "xs",
        padding: "2",
      },
      sm: {
        minWidth: "12.135rem",
        height: "7.5rem",
        fontSize: "sm",
        rounded: "sm",
        padding: "3",
      },
      md: {
        minWidth: "16.18rem",
        height: "10rem",
        fontSize: "md",
        rounded: "md",
        padding: "4",
      },
      lg: {
        minWidth: "20.225rem",
        height: "12.5rem",
        fontSize: "lg",
        rounded: "lg",
        padding: "5",
      },
      xl: {
        minWidth: "24.27rem",
        height: "15rem",
        fontSize: "xl",
        rounded: "xl",
        padding: "6",
      },
    },
  },
  defaultVariants: {
    size: "md",
  },
});

export const styles = { dialog };

export type DialogDraggableVariants = NonNullable<
  RecipeVariantProps<typeof dialog>
>;
