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
        minHeight: "5rem",
        fontSize: "xs",
        rounded: "xs",
      },
      sm: {
        lg: {
          width: "25rem",
        },
        minHeight: "7.5rem",
        fontSize: "sm",
        rounded: "sm",
      },
      md: {
        lg: {
          width: "30rem",
        },
        minHeight: "10rem",
        fontSize: "md",
        rounded: "md",
      },
      lg: {
        lg: {
          width: "35rem",
        },
        minHeight: "12.5rem",
        fontSize: "lg",
        rounded: "lg",
      },
      xl: {
        lg: {
          width: "40rem",
        },
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

const wrapper = cva({
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

const closeButton = cva({
  base: {
    position: "absolute",
    top: "1.5",
    right: "1.5",
    color: "body.text",
    cursor: "pointer",
  },
});

export const styles = { dialog, wrapper, closeButton };

export type DialogDraggableVariants = NonNullable<
  RecipeVariantProps<typeof dialog>
>;
