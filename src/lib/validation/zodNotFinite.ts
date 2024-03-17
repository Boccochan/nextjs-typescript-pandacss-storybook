import { ZodIssueCode } from "zod";

import { AbstractHandler } from "../chainOrResponsibility";
import type { Request, Response } from "./types";

export class NotFinite extends AbstractHandler<Request, Response> {
  public handle(request: Request): Response | undefined {
    if (request.issue.code == ZodIssueCode.not_finite) {
      const message = request.t("Must be finite");

      return { message };
    }

    return super.handle(request);
  }
}
