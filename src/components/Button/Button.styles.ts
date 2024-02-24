import { css, cva, type RecipeVariantProps } from "#/styled-system/css";

const colors = (color: string) => ({
  bg: {
    base: color,
    _hover: `${color}.hover`,
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
    _active: {
      opacity: 0.9,
    },
    position: "relative",
  },
  variants: {
    size: {
      xs: {
        px: "2",
        rounded: "xs",
        fontSize: "xs",
        minWidth: "2rem",
        height: "1.6rem",
      },
      sm: {
        px: "3",
        rounded: "sm",
        fontSize: "sm",
        minWidth: "3rem",
        height: "2rem",
      },
      md: {
        px: "4",
        rounded: "md",
        fontSize: "md",
        minWidth: "4rem",
        height: "2.4rem",
      },
      lg: {
        px: "5",
        rounded: "lg",
        fontSize: "lg",
        minWidth: "5rem",
        height: "2.8rem",
      },
      xl: {
        px: "6",
        rounded: "xl",
        fontSize: "xl",
        minWidth: "6rem",
        height: "3.2rem",
      },
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

const labelWrapper = cva({
  base: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "2",
  },
  variants: {
    loading: {
      true: {
        visibility: "hidden",
      },
    },
  },
});

const labelIcon = css({
  marginTop: "0.1rem", // React-icons are slightly shifted upwards
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
  labelWrapper,
  spinner,
  labelIcon,
};

export type ButtonVariants = NonNullable<RecipeVariantProps<typeof button>>;
