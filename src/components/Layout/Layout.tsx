import React from "react";

import { Theme } from "../Theme";

type LayoutProps = {
  children: React.ReactNode;
};

export const Layout = (props: LayoutProps) => {
  return <Theme>{props.children}</Theme>;
};
