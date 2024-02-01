import React, { JSX } from "react";

import { TypeCvaVariables } from "@/types";

import { button } from "./Button.css";

type BaseProps = JSX.IntrinsicElements["button"] &
  TypeCvaVariables<typeof button>;

type ButtonProps = BaseProps & {
  label: string;
};

export const Button = (props: ButtonProps) => {
  return (
    <button className={button({ color: props.color })}>{props.label}</button>
  );
};
