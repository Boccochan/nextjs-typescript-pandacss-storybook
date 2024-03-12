import { util, ZodIssueCode } from "zod";

import { AbstractHandler } from "../chainOrResponsibility";
import type { Request, Response } from "./types";

export class InvalidLiteral extends AbstractHandler<Request, Response> {
  public handle(request: Request): Response | undefined {
    if (request.issue.code == ZodIssueCode.invalid_literal) {
      const message = request.t("Invalid literal", {
        expected: JSON.stringify(
          request.issue.expected,
          util.jsonStringifyReplacer,
        ),
      });

      return { message };
    }

    return super.handle(request);
  }
}
