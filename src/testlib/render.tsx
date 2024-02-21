import { render as rtlRender } from "@testing-library/react";
import { NextIntlClientProvider } from "next-intl";
import React from "react";

import messageEn from "../../messages/en.json";
import messageJa from "../../messages/ja.json";

type RenderTuple = Parameters<typeof rtlRender>;

const messages = {
  en: messageEn,
  ja: messageJa,
};

export const render = (
  ui: RenderTuple[0],
  options?: RenderTuple[1],
  local?: "en" | "ja",
) =>
  rtlRender(ui, {
    wrapper: ({ children }) => (
      <NextIntlClientProvider
        locale={local ?? "en"}
        messages={local ? messages[local] : messageEn}
      >
        {children}
      </NextIntlClientProvider>
    ),
    ...options,
  });
