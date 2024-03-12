import { util, ZodIssueCode } from "zod";

import { AbstractHandler } from "../chainOrResponsibility";
import type { Request, Response } from "./types";

export class InvalidUnionEnumValue extends AbstractHandler<Request, Response> {
  public handle(request: Request): Response | undefined {
    if (request.issue.code == ZodIssueCode.invalid_enum_value) {
      const message = request.t("Invalid enum", {
        expected: util.joinValues(request.issue.options),
        received: request.issue.received,
      });

      return { message };
    }

    return super.handle(request);
  }
}
