import { defineSemanticTokens } from "@pandacss/dev";

const createColor = (colorName: string) => ({
  DEFAULT: {
    value: {
      base: `{colors.${colorName}.600}`,
    },
  },
  hover: {
    value: {
      base: `{colors.${colorName}.700}`,
    },
  },
  active: {
    value: {
      base: `{colors.${colorName}.800}`,
    },
  },
});

/**
 * Colors should meet the contrast of WCAG AA as much as possible.
 * Check - https://webaim.org/resources/contrastchecker/
 */
export const colors = defineSemanticTokens.colors({
  primary: createColor("blue"),
  secondary: createColor("gray"),
  danger: createColor("red"),
  light: {
    DEFAULT: {
      value: {
        base: `white`,
      },
    },
  },
  body: {
    text: {
      value: {
        base: `{colors.gray.900}`,
        _osDark: `white`,
      },
    },
    bg: {
      value: {
        base: `white`,
        _osDark: `{colors.gray.900}`,
      },
    },
    border: {
      value: {
        base: "{colors.gray.500}",
        _osDark: "{colors.gray.100}",
      },
    },
    readonly: {
      value: {
        base: "{colors.gray.100}",
        _osDark: "{colors.gray.800}",
      },
    },
  },
  dialog: {
    bg: {
      value: {
        base: "white",
        _osDark: "{colors.gray.900}",
      },
    },
    shadow: {
      value: {
        base: "rgba(0, 0, 0, 0.35) 0px 6px 15px",
        _osDark: "rgba(148, 219, 250, 0.35) 0px 6px 15px",
      },
    },
  },
  outline: {
    value: {
      base: "2px solid black",
      _osDark: "2px solid white",
    },
  },
  inputIcon: {
    value: {
      base: "{colors.gray.500}",
      _osDark: "{colors.gray.100}",
    },
  },
  icon: {
    DEFAULT: {
      value: {
        base: `{colors.gray.700}`,
        _osDark: `white`,
      },
    },
    hover: {
      value: {
        base: "{colors.gray.100}",
        _osDark: "{colors.gray.700}",
      },
    },
  },
});
