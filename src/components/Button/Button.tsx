import React, { JSX } from "react";

import { button, type ButtonVariants } from "./Button.styles";

type Props = ButtonVariants;

export const Button = (props: Props) => {
  const { color, size } = props;

  return (
    <button {...props} className={button({ color, size })}>
      AAAA
    </button>
  );
};
