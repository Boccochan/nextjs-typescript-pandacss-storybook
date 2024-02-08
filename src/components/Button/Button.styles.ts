import { css, cva, type RecipeVariantProps } from "#/styled-system/css";

const colors = (color: string) => ({
  bg: {
    base: color,
    _hover: `${color}.hover`,
    _active: `${color}.active`,
    _focusVisible: `${color}.hover`,
  },
  color: "light",
});

const button = cva({
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

const label = cva({
  variants: {
    loading: {
      true: {
        visibility: "hidden",
      },
    },
  },
});

const spinner = css({
  position: "absolute",
  inset: "0",
  margin: "auto",
  width: "fit-content",
  height: "full",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});

export const styles = {
  button,
  label,
  spinner,
};

export type ButtonVariants = NonNullable<RecipeVariantProps<typeof button>>;
