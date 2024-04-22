import { css } from "#/styled-system/css";

const header = css({
  base: {
    display: "flex",
    justifyContent: "space-between",
    width: "100%",
    color: "body.text",
  },
});

const title = css({
  fontWeight: "bold",
});

const icon = css({
  cursor: "pointer",
});

export const styles = {
  header,
  title,
  icon,
};
