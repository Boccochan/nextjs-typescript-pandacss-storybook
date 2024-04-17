import React from "react";

import { css } from "#/styled-system/css";

type DisplayBoxProps = {
  children: React.ReactNode;
};

export const DisplayBox = (props: DisplayBoxProps) => {
  return (
    <div
      className={css({
        width: "100%",
        lg: {
          width: "500px",
        },
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100px",
        borderColor: "body.border",
        px: "4",
        borderWidth: "1px",
        borderRadius: "md",
        position: "relative",
        _before: {
          position: "absolute",
          content: '"Parent component"',
          top: "-3.5",
          left: "10px",
          bg: "body.bg",
          padding: "0 4px",
          color: "body.text",
        },
      })}
    >
      {props.children}
    </div>
  );
};
