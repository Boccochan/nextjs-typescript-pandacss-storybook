import { util, ZodIssueCode } from "zod";

import { AbstractHandler } from "../chainOrResponsibility";
import type { Request, Response } from "./types";

export class InvalidString extends AbstractHandler<Request, Response> {
  public handle(request: Request): Response | undefined {
    if (request.issue.code == ZodIssueCode.invalid_string) {
      if (typeof request.issue.validation === "object") {
        if ("includes" in request.issue.validation) {
          const message = request.t("Invalid string", {
            includes: request.issue.validation.includes,
          });
          if (typeof request.issue.validation.position === "number") {
            return {
              message: request.t("Invalid string number", {
                message,
                position: request.issue.validation.position,
              }),
            };
          }
          return {
            message,
          };
        } else if ("startsWith" in request.issue.validation) {
          return {
            message: request.t("Invalid starts with", {
              startsWith: request.issue.validation.startsWith,
            }),
          };
        } else if ("endsWith" in request.issue.validation) {
          return {
            message: request.t("Invalid ends with", {
              endsWith: request.issue.validation.endsWith,
            }),
          };
        } else {
          util.assertNever(request.issue.validation);
        }
      } else if (request.issue.validation != "regex") {
        return { message: request.t(`Invalid ${request.issue.validation}`) };
      }

      const message = request.t("Required");

      return { message };
    }

    return super.handle(request);
  }
}
