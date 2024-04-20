import { cva } from "#/styled-system/css";

const draggable = cva({
  base: {
    zIndex: 10000,
    position: "fixed",
  },
  variants: {
    isDragging: {
      true: {
        userSelect: "none",
        cursor: "default",
      },
      false: {
        userSelect: "auto",
        cursor: "auto",
      },
    },
  },
});

export const styles = { draggable };
