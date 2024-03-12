import { ZodIssueCode } from "zod";

import { AbstractHandler } from "../chainOrResponsibility";
import type { Request, Response } from "./types";

export class InvalidString extends AbstractHandler<Request, Response> {
  public handle(request: Request): Response | undefined {
    if (request.issue.code == ZodIssueCode.invalid_string) {
      if (typeof request.issue.validation === "object") {
        if ("includes" in request.issue.validation) {
          if (typeof request.issue.validation.position === "number") {
            return { message: "number" };
          }
          return {
            message: request.t("Invalid string", {
              includes: request.issue.validation.includes,
            }),
          };
        }
      }

      const message = request.t("Required");

      return { message };
    }

    return super.handle(request);
  }
}
