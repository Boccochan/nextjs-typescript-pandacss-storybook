import { cva, type RecipeVariantProps } from "#/styled-system/css";

const colors = (color: string) => ({
  bg: { base: color, _hover: `${color}.hover`, _active: `${color}.active` },
  color: "light",
});

// TODO: change to sva or other way.

export const button = cva({
  base: {
    cursor: "pointer",
    whiteSpace: "nowrap",
    _disabled: {
      opacity: 0.7,
      pointerEvents: "none",
    },
    position: "relative",
  },
  variants: {
    size: {
      md: { py: "2", px: "3", rounded: "sm" },
      lg: { p: "2", px: "3", rounded: "md", fontSize: "lg" },
    },
    color: {
      primary: colors("primary"),
      danger: colors("danger"),
    },
  },
  defaultVariants: {
    color: "primary",
    size: "md",
  },
});

export const labelCva = cva({
  variants: {
    loading: {
      true: {
        visibility: "hidden",
      },
    },
  },
});

export type ButtonVariants = NonNullable<RecipeVariantProps<typeof button>>;
