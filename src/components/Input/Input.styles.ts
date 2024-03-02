import { cva, type RecipeVariantProps } from "#/styled-system/css";

const input = cva({
  base: {
    border: "1px solid {colors.body.border}",
    bg: "body.bg",
    color: "body.text",
    _disabled: {
      opacity: "0.6",
    },
    _readOnly: {
      pointerEvents: "none",
      outline: "none",
      bg: "body.readonly",
    },
    display: "block",
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
    width: {
      xs: { width: "10rem" },
      sm: { width: "12rem" },
      md: { width: "14rem" },
      lg: { width: "16rem" },
      xl: { width: "18rem" },
      full: { width: "100%" },
      auto: { width: "auto" },
    },
    color: {
      basic: {
        borderColor: "body.border",
      },
      danger: {
        borderColor: "danger",
        outlineColor: "danger",
      },
    },
  },
  defaultVariants: {
    size: "md",
    width: "full",
  },
});

export const styles = { input };

export type InputVariants = NonNullable<RecipeVariantProps<typeof input>>;
