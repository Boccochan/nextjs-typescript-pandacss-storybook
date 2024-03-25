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
        fontSize: "xs",
      },
      sm: {
        fontSize: "sm",
      },
      md: {
        fontSize: "md",
      },
      lg: {
        fontSize: "lg",
      },
      xl: {
        fontSize: "xl",
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
