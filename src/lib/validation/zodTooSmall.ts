import { ZodIssueCode } from "zod";

import { AbstractHandler } from "../chainOrResponsibility";
import type { Request, Response } from "./types";

export class TooSmall extends AbstractHandler<Request, Response> {
  public handle(request: Request): Response | undefined {
    if (request.issue.code == ZodIssueCode.too_small) {
      const message = request.t("hello");

      // TODO: Add too small validation.

      return { message };
    }

    return super.handle(request);
  }
}
