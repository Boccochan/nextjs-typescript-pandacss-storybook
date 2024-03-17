import { createFormatter, createTranslator } from "next-intl";

import { locales } from "../i18n";

export const getTranslator = async (locale: string) => {
  if (!locales.includes(locale)) throw Error("Unkown locale");
  const messages = (await import(`../../messages/${locale}.json`)).default;

  const t = createTranslator({ locale, messages });
  const f = createFormatter({ locale });

  return { t, f };
};

export const getFormatter = (locale: string) => createFormatter({ locale });
