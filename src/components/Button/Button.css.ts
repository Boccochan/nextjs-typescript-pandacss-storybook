import { cva } from "#/styled-system/css";

export const button = cva({
  variants: {
    color: {
      primary: {
        bg: "btn.primary.bg",
        color: "btn.primary.text",
        _osDark: {
          bg: "btn.primary.bg.dark",
          color: "btn.primary.text.dark",
        },
      },
      secondary: {
        bg: "btn.danger.bg",
        color: "btn.danger.text",
        _osDark: {
          bg: "btn.danger.bg.dark",
          color: "btn.danger.text.dark",
        },
      },
    },
  },
});
