import { cva } from "#/styled-system/css";

export const button = cva({
  variants: {
    color: {
      primary: {
        bg: "primary",
        color: "light",
        _hover: {
          bg: "primary.hover",
        },
        _disabled: {
          bg: "primary.disabled",
        },
        _active: {
          bg: "primary.active",
        },
      },
      danger: {
        bg: "danger",
        color: "light",
        _hover: {
          bg: "danger.hover",
        },
        _disabled: {
          bg: "danger.disabled",
        },
        _active: {
          bg: "danger.active",
        },
      },
    },
  },
});
