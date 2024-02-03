import { cva, type RecipeVariantProps } from "#/styled-system/css";

export const button = cva({
  variants: {
    size: {
      sm: { padding: "4", fontSize: "12px" },
      lg: { padding: "8", fontSize: "40px" },
    },
    color: {
      primary: {
        bg: "primary",
        color: "light",
        _hover: {
          bg: "primary.hover",
        },
        _disabled: {
          bg: "primary.disabled",
        },
        _active: {
          bg: "primary.active",
        },
      },
      danger: {
        bg: "danger",
        color: "light",
        _hover: {
          bg: "danger.hover",
        },
        _disabled: {
          bg: "danger.disabled",
        },
        _active: {
          bg: "danger.active",
        },
      },
    },
  },
  defaultVariants: {
    color: "primary",
    size: "sm",
  },
});

export type ButtonVariants = NonNullable<RecipeVariantProps<typeof button>>;
