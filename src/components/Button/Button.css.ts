import { cva } from "#/styled-system/css";

export const button = cva({
  variants: {
    color: {
      primary: {
        backgroundColor: "btn.primary.bg",
        color: "btn.primary.text",
      },
      secondary: {
        backgroundColor: "btn.danger.bg",
        color: "btn.danger.text",
      },
    },
  },
});
