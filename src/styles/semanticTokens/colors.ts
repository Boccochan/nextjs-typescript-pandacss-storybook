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
  },
  light: {
    DEFAULT: {
      value: {
        base: `white`,
      },
    },
  },
});
