import React from "react";

import { TypeCva } from "@/types";

import { button } from "./Button.css";

type ButtonProps = React.JSX.IntrinsicElements["button"] &
  TypeCva<typeof button> & {
    label: string;
  };

export const Button = (props: ButtonProps) => {
  return (
    <button className={button({ color: props.color })}>{props.label}</button>
  );
};
