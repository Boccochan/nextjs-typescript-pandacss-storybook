import { ZodIssueCode } from "zod";

import { AbstractHandler } from "../chainOrResponsibility";
import type { Request, Response } from "./types";

export class TooSmall extends AbstractHandler<Request, Response> {
  private createErrorMessage(request: Request, expectType: string) {
    if (request.issue.code == ZodIssueCode.too_small) {
      const min = request.issue.minimum.toString();
      if (request.issue.exact) {
        return {
          message: request.t(`Too small ${expectType} exactly`, { min }),
        };
      } else if (request.issue.inclusive) {
        return {
          message: request.t(`Too small ${expectType} at least`, { min }),
        };
      }

      return {
        message: request.t(`Too small ${expectType} more than`, { min }),
      };
    }
  }
  public handle(request: Request): Response | undefined {
    if (request.issue.code == ZodIssueCode.too_small) {
      if (["array"].includes(request.issue.type)) {
        return this.createErrorMessage(request, request.issue.type);
      }

      const message = request.t("hello");

      return { message };
    }

    return super.handle(request);
  }
}
