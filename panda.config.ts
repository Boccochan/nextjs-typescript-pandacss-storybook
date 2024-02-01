import { defineConfig } from "@pandacss/dev";

export default defineConfig({
  // Whether to use css reset
  preflight: true,

  // Where to look for your css declarations
  include: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./pages/**/*.{js,jsx,ts,tsx}",
    "./stories/**/*.{js,jsx,ts,tsx}",
  ],

  // Files to exclude
  exclude: [],
  conditions: {
    osDark: process.env.STORYBOOK_DARK_MODE
      ? "[data-theme='dark']  &"
      : "@media (prefers-color-scheme: dark)",
  },

  // Useful for theme customization
  theme: {
    extend: {
      semanticTokens: {
        colors: {
          btn: {
            primary: {
              bg: {
                DEFAULT: {
                  value: {
                    base: "{colors.blue.500}",
                    _disabled: "{colors.blue.300}",
                  },
                },
                dark: {
                  value: {
                    base: "{colors.blue.600}",
                    _disabled: "{colors.blue.400}",
                  },
                },
              },
              text: {
                DEFAULT: {
                  value: {
                    base: "white",
                    _disabled: "{colors.blue.200}",
                  },
                },
                dark: {
                  value: {
                    base: "{colors.blue.100}",
                    _disabled: "white",
                  },
                },
              },
            },
            danger: {
              bg: {
                DEFAULT: {
                  value: {
                    base: "{colors.red.500}",
                    _disabled: "{colors.red.300}",
                  },
                },
                dark: {
                  value: {
                    base: "{colors.red.600}",
                    _disabled: "{colors.red.400}",
                  },
                },
              },
              text: {
                DEFAULT: {
                  value: {
                    base: "white",
                    _disabled: "{colors.red.200}",
                  },
                },
                dark: {
                  value: {
                    base: "{colors.red.100}",
                    _disabled: "white",
                  },
                },
              },
            },
          },
        },
      },
    },
  },

  // The output directory for your css system
  outdir: "styled-system",
});
