import type { RecipeVariantProps } from "#/styled-system/css";
import { cva } from "#/styled-system/css";

const dialog = cva({
  base: {
    bg: "dialog.bg",
    color: "body.text",
    boxShadow: "{colors.dialog.shadow}", // For some reasons, dialog.shadow does not work
    minWidth: "96%",
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
          minWidth: "8.09rem",
        },
        marginX: "2rem",
        height: "5rem",
        fontSize: "xs",
        rounded: "xs",
      },
      sm: {
        lg: {
          minWidth: "12.135rem",
        },
        height: "7.5rem",
        fontSize: "sm",
        rounded: "sm",
      },
      md: {
        lg: {
          minWidth: "16.18rem",
        },
        height: "10rem",
        fontSize: "md",
        rounded: "md",
      },
      lg: {
        lg: {
          minWidth: "20.225rem",
        },
        height: "12.5rem",
        fontSize: "lg",
        rounded: "lg",
      },
      xl: {
        lg: {
          minWidth: "24.27rem",
        },
        height: "15rem",
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
        paddingX: "2",
        // TODO: Add bottom
      },
      sm: {
        paddingX: "3",
      },
      md: {
        paddingX: "4",
      },
      lg: {
        paddingX: "5",
      },
      xl: {
        paddingX: "6",
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
