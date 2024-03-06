import type { useTranslations } from "next-intl";
import { z } from "zod";

type Translation = ReturnType<typeof useTranslations<string>>;

/**
 * Set error map to support i18n by zod.
 * The default error messages of zod does not support i18n.
 * This function should be called at the top component
 * of the client component, such as Layout.tsx.
 */
export const setI18nZodDefaultErrorMsg = (t: Translation) => {
  const customErrorMap: z.ZodErrorMap = (issue, ctx) => {
    if (issue.code === z.ZodIssueCode.invalid_type) {
      if (issue.expected === "number") {
        return { message: t("hello") };
      }
    }
    return { message: ctx.defaultError };
  };

  z.setErrorMap(customErrorMap);
};
