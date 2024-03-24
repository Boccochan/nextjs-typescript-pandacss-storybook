import type { RecipeVariantProps } from "#/styled-system/css";
import { cva } from "#/styled-system/css";

const inputBase = cva({
  base: {
    border: "none",
    bg: "body.bg",
    color: "body.text",
    outline: "none",
    _disabled: {
      opacity: "0.6",
    },
    _readOnly: {
      pointerEvents: "none",
      bg: "body.readonly",
    },
    display: "block",
    width: "100%",
  },
  variants: {
    size: {
      xs: {
        paddingInline: "2",
        rounded: "xs",
        fontSize: "xs",
        minWidth: "10rem",
        height: "1.6rem",
      },
      sm: {
        paddingInline: "3",
        rounded: "xs",
        fontSize: "sm",
        minWidth: "12rem",
        height: "2rem",
      },
      md: {
        paddingInline: "4",
        rounded: "xs",
        fontSize: "md",
        minWidth: "14rem",
        height: "2.4rem",
      },
      lg: {
        paddingInline: "4",
        rounded: "xs",
        fontSize: "lg",
        minWidth: "16rem",
        height: "2.8rem",
      },
      xl: {
        paddingInline: "4",
        rounded: "xs",
        fontSize: "xl",
        minWidth: "16rem",
        height: "3.2rem",
      },
    },
  },
  defaultVariants: {
    size: "md",
  },
});

export const styles = { inputBase };

export type InputBaseVariants = NonNullable<
  RecipeVariantProps<typeof inputBase>
>;
