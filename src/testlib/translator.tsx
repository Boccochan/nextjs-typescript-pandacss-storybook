import { createTranslator } from "next-intl";

import { locales } from "../i18n";

export const getTranslator = async (locale: string) => {
  if (!locales.includes(locale)) throw Error("Unkown locale");
  const messages = (await import(`../../messages/${locale}.json`)).default;

  return createTranslator({ locale, messages });
};
