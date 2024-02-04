import { cva, type RecipeVariantProps } from "#/styled-system/css";

const colors = (color: string) => ({
  bg: color,
  color: "light",
  _hover: {
    bg: `${color}.hover`,
  },
  _disabled: {
    bg: `${color}.disabled`,
  },
  _active: {
    bg: `${color}.active`,
  },
});

export const button = cva({
  base: {
    cursor: "pointer",
    whiteSpace: "nowrap",
  },
  variants: {
    size: {
      sm: { padding: "4", fontSize: "12px" },
      lg: { padding: "8", fontSize: "40px" },
    },
    color: {
      primary: colors("primary"),
      danger: colors("danger"),
    },
  },
  defaultVariants: {
    color: "primary",
    size: "sm",
  },
});

export type ButtonVariants = NonNullable<RecipeVariantProps<typeof button>>;
