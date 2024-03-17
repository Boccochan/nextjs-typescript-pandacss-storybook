"use client";
import { useFormatter, useTranslations } from "next-intl";
import React from "react";

import { setI18nZodDefaultErrorMsg } from "@/lib";

type LayoutProps = {
  children: React.ReactNode;
};

export const Layout = (props: LayoutProps) => {
  const t = useTranslations();
  const f = useFormatter();

  setI18nZodDefaultErrorMsg(t, f);

  return <>{props.children}</>;
};
