import { ZodIssueCode } from "zod";

import { AbstractHandler } from "../chainOrResponsibility";
import type { Request, Response } from "./types";

export class TooBig extends AbstractHandler<Request, Response> {
  private createErrorMessage(request: Request, expectType: string) {
    if (request.issue.code == ZodIssueCode.too_big) {
      // For Typescript
      if (request.issue.type === expectType) {
        const max = request.issue.maximum.toString();
        if (request.issue.exact) {
          return {
            message: request.t(`Too big ${expectType} exactly`, { max }),
          };
        } else if (request.issue.inclusive) {
          return {
            message: request.t(`Too big ${expectType} at most`, { max }),
          };
        } else {
          return {
            message: request.t(`Too big ${expectType} less than`, { max }),
          };
        }
      }
    }
  }

  public handle(request: Request): Response | undefined {
    if (request.issue.code == ZodIssueCode.too_big) {
      if (request.issue.type === "array") {
        return this.createErrorMessage(request, request.issue.type);
      }
      const message = request.t("Required");

      // TODO: Add error messages for number, string and so on.

      return { message };
    }

    return super.handle(request);
  }
}
