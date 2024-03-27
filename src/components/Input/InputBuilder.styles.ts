import { cva, type RecipeVariantProps } from "#/styled-system/css";

const inputBuilder = cva({
  base: {
    border: "1px solid {colors.body.border}",
    bg: "body.bg",
    color: "body.text",
    // _disabled: {
    //   opacity: "0.6",
    // },
    // _readOnly: {
    //   pointerEvents: "none",
    //   outline: "none",
    //   bg: "body.readonly",
    // },
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    _focusWithin: {
      outline: {
        // TODO: Globalのcssと統一する
        base: "2px solid black",
        _osDark: "2px solid white",
      },
    },
  },
  variants: {
    size: {
      xs: {
        paddingX: "2",
        rounded: "xs",
        minWidth: "10rem",
        height: "2rem",
      },
      sm: {
        paddingX: "2",
        rounded: "xs",
        minWidth: "12rem",
        height: "2.2rem",
      },
      md: {
        paddingX: "3",
        rounded: "xs",
        minWidth: "14rem",
        height: "2.4rem",
      },
      lg: {
        paddingX: "3",
        rounded: "xs",
        minWidth: "16rem",
        height: "2.6rem",
      },
      xl: {
        paddingX: "3",
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
  },
  defaultVariants: {
    size: "md",
    width: "md",
    invalid: false,
    isFocused: false,
  },
});

export const styles = { inputBuilder };

export type InputBuilderVariants = NonNullable<
  RecipeVariantProps<typeof inputBuilder>
>;
