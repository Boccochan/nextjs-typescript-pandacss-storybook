"use client";
import { useTranslations } from "next-intl";
import React from "react";
import { z } from "zod";

type LayoutProps = {
  children: React.ReactNode;
};

export const Layout = (props: LayoutProps) => {
  const t = useTranslations();

  const customErrorMap: z.ZodErrorMap = (issue, ctx) => {
    if (issue.code === z.ZodIssueCode.invalid_type) {
      if (issue.expected === "number") {
        return { message: t("hello") };
      }
    }

    return { message: ctx.defaultError };
  };

  // The validation will be executed in client components.
  z.setErrorMap(customErrorMap);

  return <>{props.children}</>;
};
