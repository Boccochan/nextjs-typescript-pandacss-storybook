import { cva, type RecipeVariantProps } from "#/styled-system/css";

const inputBuilder = cva({
  base: {
    border: "1px solid {colors.body.border}",
    bg: "body.bg",
    color: "body.text",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    _focusWithin: {
      outline: "{colors.outline}", // For some reasons, outline needs colors..
    },
  },
  variants: {
    size: {
      xs: {
        rounded: "xs",
        minWidth: "10rem",
        height: "2rem",
      },
      sm: {
        rounded: "xs",
        minWidth: "12rem",
        height: "2.2rem",
      },
      md: {
        rounded: "xs",
        minWidth: "14rem",
        height: "2.4rem",
      },
      lg: {
        rounded: "xs",
        minWidth: "16rem",
        height: "2.6rem",
      },
      xl: {
        rounded: "xs",
        minWidth: "16rem",
        height: "2.8rem",
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
    invalid: {
      true: {
        borderColor: "danger",
        outlineColor: "danger",
      },
    },
    isFocused: {
      true: {},
    },
    disabled: {
      true: {
        opacity: "0.6",
        pointerEvents: "none",
        bg: "body.readonly",
      },
    },
    readOnly: {
      true: {
        pointerEvents: "none",
        bg: "body.readonly",
      },
    },
  },
  defaultVariants: {
    size: "md",
    width: "md",
    invalid: false,
    isFocused: false,
    disabled: false,
    readOnly: false,
  },
});

export const styles = { inputBuilder };

export type InputBuilderVariants = NonNullable<
  RecipeVariantProps<typeof inputBuilder>
>;
