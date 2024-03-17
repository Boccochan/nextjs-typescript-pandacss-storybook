import type { useFormatter, useTranslations } from "next-intl";
import type { z } from "zod";

type Translation = ReturnType<typeof useTranslations<string>>;
type Formatter = ReturnType<typeof useFormatter>;

type Request = {
  issue: z.ZodIssueOptionalMessage;
  ctx: z.ErrorMapCtx;
  t: Translation;
  f: Formatter;
};

type Response = {
  message: string;
};

export type { Formatter, Request, Response, Translation };
