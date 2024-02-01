import { defineSemanticTokens } from "@pandacss/dev";

export const colors = defineSemanticTokens.colors({
  primary: {
    DEFAULT: {
      value: {
        base: "{colors.blue.400}",
        _osDark: "{colors.blue.600}",
      },
    },
    disabled: {
      value: {
        base: "{colors.blue.200}",
        _osDark: "{colors.blue.300}",
      },
    },
    hover: {
      value: {
        base: "{colors.blue.500}",
        _osDark: "{colors.blue.700}",
      },
    },
    active: {
      value: {
        base: "{colors.blue.400}",
        _osDark: "{colors.blue.600}",
      },
    },
  },
  danger: {
    DEFAULT: {
      value: {
        base: "{colors.red.400}",
        _osDark: "{colors.red.600}",
      },
    },
    disabled: {
      value: {
        base: "{colors.red.200}",
        _osDark: "{colors.red.300}",
      },
    },
    hover: {
      value: {
        base: "{colors.red.500}",
        _osDark: "{colors.red.700}",
      },
    },
    active: {
      value: {
        base: "{colors.red.400}",
        _osDark: "{colors.red.600}",
      },
    },
  },
  light: {
    DEFAULT: {
      value: {
        base: "white",
      },
    },
  },
});
