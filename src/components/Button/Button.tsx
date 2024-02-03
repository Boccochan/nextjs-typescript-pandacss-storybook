import React, { JSX } from "react";

import { button } from "#/styled-system/recipes";

type ButtonProps = JSX.IntrinsicElements["button"] & {
  color: "primary" | "danger";
  label: string;
};

export const Button = (props: ButtonProps) => {
  return (
    <button className={button({ color: "primary" })}>{props.label}</button>
  );
};
