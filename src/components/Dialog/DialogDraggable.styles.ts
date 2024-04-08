import { css } from "#/styled-system/css";

const dialog = css({
  rounded: "md",
  height: "10rem",
  width: "10rem",
  position: "fixed",
  zIndex: 10000,
  bg: "dialog.bg",
  boxShadow: "{colors.dialog.shadow}", // For some reasons, dialog.shadow does not work
});

export const styles = { dialog };
