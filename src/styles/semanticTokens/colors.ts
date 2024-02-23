import { defineSemanticTokens } from "@pandacss/dev";

const createColor = (colorName: string) => ({
  DEFAULT: {
    value: {
      base: `{colors.${colorName}.500}`,
      _osDark: `{colors.${colorName}.600}`,
    },
  },
  hover: {
    value: {
      base: `{colors.${colorName}.600}`,
      _osDark: `{colors.${colorName}.700}`,
    },
  },
  active: {
    value: {
      base: `{colors.${colorName}.500}`,
      _osDark: `{colors.${colorName}.600}`,
    },
  },
});

/**
 * Colors should meet the contrast of WCAG AA as much as possible.
 * Check - https://webaim.org/resources/contrastchecker/
 */
export const colors = defineSemanticTokens.colors({
  primary: createColor("blue"),
  danger: createColor("red"),
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
  },
  light: {
    DEFAULT: {
      value: {
        base: `white`,
      },
    },
  },
  icon: {
    DEFAULT: {
      value: {
        base: `black`,
        _osDark: `white`,
      },
    },
    hover: {
      value: {
        base: "{colors.blue.50}",
      },
    },
  },
});
