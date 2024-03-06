"use client";
import { useTranslations } from "next-intl";
import React from "react";

import { setI18nZodDefaultErrorMsg } from "@/lib";

type LayoutProps = {
  children: React.ReactNode;
};

export const Layout = (props: LayoutProps) => {
  const t = useTranslations();

  setI18nZodDefaultErrorMsg(t);

  return <>{props.children}</>;
};
