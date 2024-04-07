import { cva } from "#/styled-system/css";

const dialog = cva({
  base: {
    border: "1px solid {colors.body.border}",
    height: "10rem",
    position: "fixed",
    top: "50%",
    left: "50%",
  },
  variants: {},
});

export const style = { dialog };
