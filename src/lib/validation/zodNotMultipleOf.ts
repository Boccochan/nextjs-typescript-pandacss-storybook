import { ZodIssueCode } from "zod";

import { AbstractHandler } from "../chainOrResponsibility";
import type { Request, Response } from "./types";

export class NotMultipleOf extends AbstractHandler<Request, Response> {
  public handle(request: Request): Response | undefined {
    if (request.issue.code == ZodIssueCode.not_multiple_of) {
      const message = request.t("Multiple of", {
        multipleOf: request.issue.multipleOf.toString(),
      });

      // TODO: Add error messages for number, string and so on.

      return { message };
    }

    return super.handle(request);
  }
}
