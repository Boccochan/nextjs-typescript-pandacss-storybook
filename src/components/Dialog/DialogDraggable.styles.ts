import type { RecipeVariantProps } from "#/styled-system/css";
import { cva } from "#/styled-system/css";

const dialog = cva({
  base: {
    bg: "dialog.bg",
    color: "body.text",
    boxShadow: "{colors.dialog.shadow}", // For some reasons, dialog.shadow does not work
    width: "96%",
  },
  variants: {
    dialogAnimation: {
      true: {
        animation: "dialogOpen 0.2s forwards",
      },
      false: {
        animation: "dialogClose 0.2s forwards",
      },
    },
    size: {
      xs: {
        lg: {
          width: "20rem",
        },
        minWidth: "10rem",
        minHeight: "5rem",
        fontSize: "xs",
        rounded: "xs",
      },
      sm: {
        lg: {
          width: "25rem",
        },
        minWidth: "12.5rem",
        minHeight: "7.5rem",
        fontSize: "sm",
        rounded: "sm",
      },
      md: {
        lg: {
          width: "30rem",
        },
        minWidth: "15rem",
        minHeight: "10rem",
        fontSize: "md",
        rounded: "md",
      },
      lg: {
        lg: {
          width: "35rem",
        },
        minWidth: "17.5rem",
        minHeight: "12.5rem",
        fontSize: "lg",
        rounded: "lg",
      },
      xl: {
        lg: {
          width: "40rem",
        },
        minWidth: "20rem",
        minHeight: "15rem",
        fontSize: "xl",
        rounded: "xl",
      },
    },
  },
  defaultVariants: {
    // dialogAnimation: true,
    size: "md",
  },
});

export const styles = { dialog };

export type DialogDraggableVariants = NonNullable<
  RecipeVariantProps<typeof dialog>
>;
