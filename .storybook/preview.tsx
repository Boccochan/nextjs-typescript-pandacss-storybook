import React from "react";
import "../src/app/globals.css";

import { useDarkMode } from "storybook-dark-mode";
import { NextIntlClientProvider } from "next-intl";
import messageEn from "../messages/en.json";
import messageJa from "../messages/ja.json";

export const globalTypes = {
  locale: {
    name: "Locale",
    description: "Internationalization locale",
    toolbar: {
      icon: "globe",
      items: [
        { value: "en", title: "English" },
        { value: "ja", title: "日本語" },
      ],
      showName: true,
    },
  },
};

const Intl = (Story, context) => {
  const locale = context.globals.locale ?? "en";

  const messages = {
    en: messageEn,
    ja: messageJa,
  };

  return (
    <NextIntlClientProvider locale={locale} messages={messages[locale]}>
      <Story />
    </NextIntlClientProvider>
  );
};

const Theme = (Story) => {
  //Javascript can not change prefers-color-scheme. So,
  //we have to change dark by the different way. See
  //panda.config.ts osDark conditions.
  const dark = useDarkMode();

  return (
    <div data-theme={dark ? "dark" : "light"}>
      <Story />
    </div>
  );
};

const preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [Intl, Theme],
};

export default preview;
