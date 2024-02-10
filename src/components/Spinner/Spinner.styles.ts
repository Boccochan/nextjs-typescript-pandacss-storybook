import { cva, type RecipeVariantProps } from "#/styled-system/css";

export const spinner = cva({
  base: {
    fontSize: "6.8px",
    position: "relative",
    borderTop: "0.8em solid rgba(255, 255, 255, 0.2)",
    borderRight: "0.8em solid rgba(255, 255, 255, 0.2)",
    borderBottom: "0.8em solid rgba(255, 255, 255, 0.2)",
    borderLeft: "0.8em solid white",
    transform: "translateZ(0)",
    animation: "spinner 1.1s infinite linear",
    borderRadius: "50%",
    width: "3em",
    height: "3em",
  },
  variants: {
    size: {
      sm: { fontSize: "4.8px" },
      md: { fontSize: "6.8px" },
      lg: { fontSize: "8.8px" },
      xl: { fontSize: "10.8px" },
    },
  },
  defaultVariants: {
    size: "md",
  },
});

export type SpinnerVariants = NonNullable<RecipeVariantProps<typeof spinner>>;
