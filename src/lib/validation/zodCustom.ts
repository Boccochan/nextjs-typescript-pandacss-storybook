import { ZodIssueCode } from "zod";

import { AbstractHandler } from "../chainOrResponsibility";
import type { Request, Response } from "./types";

export class Custom extends AbstractHandler<Request, Response> {
  public handle(request: Request): Response | undefined {
    if (request.issue.code == ZodIssueCode.custom) {
      const message = request.t("Invalid value");

      return { message };
    }

    return super.handle(request);
  }
}
