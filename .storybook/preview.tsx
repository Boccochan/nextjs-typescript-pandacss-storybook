import React from "react";
import "../src/app/globals.css";

import { NextIntlClientProvider } from "next-intl";
import messageEn from "../messages/en.json";
import messageJa from "../messages/ja.json";

import { Noto_Sans_JP } from "next/font/google";
const notoSansJp = Noto_Sans_JP({ subsets: ["latin"] });

const GoogleFontsDecorator = (Story) => {
  // I put google font here. But there might be the better way
  // to set font-family.
  return (
    <main className={notoSansJp.className}>
      <Story />
    </main>
  );
};

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

const Background = (Story, context) => {
  //Javascript can not change prefers-color-scheme. So,
  //we have to change dark by the different way. See
  //panda.config.ts osDark conditions.
  const [theme, setTheme] = React.useState("light");

  React.useEffect(() => {
    setTheme(
      context.globals.backgrounds?.value === "#FFFFFF" ? "light" : "dark",
    );
  }, [context.globals.backgrounds]);

  return (
    <div data-theme={theme}>
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
    backgrounds: {
      default: "light",
      values: [
        { name: "light", value: "#FFFFFF" },
        // Dark mode should be the same as body.bg._osDark
        // See styles/semanticTokens
        { name: "dark", value: "#111827" },
      ],
    },
  },
  decorators: [GoogleFontsDecorator, Intl, Background],
};

export default preview;
