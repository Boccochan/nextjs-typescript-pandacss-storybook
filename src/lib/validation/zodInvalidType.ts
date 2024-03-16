import { ZodIssueCode, ZodParsedType } from "zod";

import { AbstractHandler } from "../chainOrResponsibility";
import type { Request, Response } from "./types";

export class InvalidType extends AbstractHandler<Request, Response> {
  public handle(request: Request): Response | undefined {
    if (request.issue.code == ZodIssueCode.invalid_type) {
      if (request.issue.received === ZodParsedType.undefined) {
        return { message: request.t("Required") };
      } else {
        return {
          message: request.t("Invalid type", {
            expected: request.issue.expected,
            received: request.issue.received,
          }),
        };
      }
    }

    return super.handle(request);
  }
}
