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
    light: "[data-color-mode=light] &",
    dark: "[data-color-mode=dark] &",
  },

  // Useful for theme customization
  theme: {
    extend: {
      semanticTokens: {
        colors: {
          btn: {
            primary: {
              bg: {
                value: {
                  base: "{colors.blue.500}",
                  _dark: "{colors.blue.600}",
                },
              },
              text: {
                value: {
                  base: "white",
                  _dark: "{colors.blue.100}",
                },
              },
            },
            danger: {
              bg: {
                value: {
                  base: "{colors.red.500}",
                  _dark: "{colors.red.600}",
                },
              },
              text: {
                value: {
                  base: "white",
                  _dark: "{colors.red.100}",
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
