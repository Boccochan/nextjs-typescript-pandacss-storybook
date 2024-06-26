import { css, cva, type RecipeVariantProps } from "#/styled-system/css";

type Color = "primary" | "danger";
type Variants = "outline" | "contained" | "text";

const colors = (color: Color) => ({
  color: `light`,
  bg: {
    base: color,
    _hover: `${color}.hover`,
    _active: `${color}.active`,
  },
});

const outline = (color: Color, variants: Variants) => ({
  color,
  variants,
  css: {
    bg: `${color}/0`,
    color,
    borderColor: `${color}/40`,
    borderStyle: "solid",
    borderWidth: "1px",
    _hover: {
      borderColor: `${color}/60`,
      bg: `${color}/3`,
    },
    _active: {
      borderColor: `${color}/70`,
      bg: `${color}/10`,
      color: `${color}/90`,
    },
  },
});

const text = (color: Color, variants: Variants) => ({
  color,
  variants,
  css: {
    bg: `${color}/0`,
    color,
    _hover: {
      bg: `${color}/6`,
    },
    _active: {
      bg: `${color}/10`,
      color: `${color}/90`,
    },
    _disabled: {
      bg: `${color}/6`,
    },
  },
});

const compound = (color: Color, variants: Variants) => {
  if (variants === "outline") {
    return outline(color, variants);
  } else if (variants === "text") {
    return text(color, variants);
  } else {
    throw Error("BUG: Unkown variants");
  }
};

const createCompoundVariants = () => {
  const result: ReturnType<typeof compound>[] = [];

  ["primary", "danger"].forEach((color) => {
    ["text", "outline"].forEach((variants) => {
      result.push(compound(color as Color, variants as Variants));
    });
  });

  return result;
};

const button = cva({
  base: {
    cursor: "pointer",
    whiteSpace: "nowrap",
    fontWeight: "medium",
    _disabled: {
      opacity: 0.4,
      pointerEvents: "none",
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
    width: {
      xs: {
        width: "4rem",
      },
      sm: {
        width: "6rem",
      },
      md: {
        width: "8rem",
      },
      lg: {
        width: "10rem",
      },
      xl: {
        width: "12rem",
      },
      full: {
        width: "100%",
      },
      auto: {
        width: "auto",
      },
    },
    color: {
      primary: colors("primary"),
      danger: colors("danger"),
    },
    variants: {
      contained: {},
      outline: {},
      text: {},
    },
  },
  defaultVariants: {
    color: "primary",
    size: "md",
    variants: "contained",
  },
  compoundVariants: createCompoundVariants(),
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
