import { cva, type RecipeVariantProps } from "#/styled-system/css";

export const spinner = cva({
  base: {
    fontSize: "6.8px",
    position: "relative",
    transform: "translateZ(0)",
    animation: "spinner 1.1s infinite linear",
    borderRadius: "50%",
    width: "3em",
    height: "3em",
  },
  variants: {
    size: {
      xs: { fontSize: "2.8px" },
      sm: { fontSize: "4.8px" },
      md: { fontSize: "6.8px" },
      lg: { fontSize: "8.8px" },
      xl: { fontSize: "10.8px" },
    },
    color: {
      basic: {
        borderTop: "0.3em solid {colors.body.border}",
        borderRight: "0.3em solid {colors.body.border}",
        borderBottom: "0.3em solid {colors.body.border}",
        borderLeft: "0.3em solid {colors.body.bg}",
      },
      light: {
        borderTop: "0.3em solid {colors.light}",
        borderRight: "0.3em solid {colors.light}",
        borderBottom: "0.3em solid {colors.light}",
        borderLeft: "0.3em solid rgba(255, 255, 255, 0)",
      },
    },
  },
  defaultVariants: {
    size: "md",
    color: "basic",
  },
});

export const styles = {
  spinner,
};

export type SpinnerVariants = NonNullable<RecipeVariantProps<typeof spinner>>;
