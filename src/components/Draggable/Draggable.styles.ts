import { cva } from "#/styled-system/css";

const draggable = cva({
  base: {
    zIndex: 10000,
    position: "fixed",
  },
  variants: {
    isDragging: {
      true: {
        transform: "none",
        userSelect: "none",
        cursor: "default",
      },
      false: {
        transform: "translate(-50%, -50%)",
        userSelect: "auto",
        cursor: "auto",
      },
    },
  },
});

export const styles = { draggable };
