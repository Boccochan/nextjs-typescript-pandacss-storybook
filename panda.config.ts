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
                  base: "red",
                  _dark: "blue",
                },
              },
              text: {
                value: {
                  base: "blue",
                  _dark: "red",
                },
              },
            },
            danger: {
              bg: {
                value: {
                  base: "yellow",
                  _dark: "black",
                },
              },
              text: {
                value: {
                  base: "black",
                  _dark: "yellow",
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
