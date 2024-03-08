import type { useTranslations } from "next-intl";
import type { z } from "zod";

type Translation = ReturnType<typeof useTranslations<string>>;
type Request = {
  issue: z.ZodIssueOptionalMessage;
  ctx: z.ErrorMapCtx;
  t: Translation;
};

type Response = {
  message: string;
};

export type { Request, Response, Translation };
