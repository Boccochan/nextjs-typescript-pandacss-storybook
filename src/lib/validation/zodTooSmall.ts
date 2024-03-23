import { ZodIssueCode } from "zod";

import { AbstractHandler } from "../chainOrResponsibility";
import { createDateMessage } from "./lib";
import type { Request, Response } from "./types";

export class TooSmall extends AbstractHandler<Request, Response> {
  private createErrorMessage(request: Request, expectType: string) {
    if (request.issue.code == ZodIssueCode.too_small) {
      if (expectType === "date") {
        const orderDate = new Date(Number(request.issue.minimum));

        if (request.issue.exact) {
          return createDateMessage(
            request,
            `Too small ${expectType} exactly`,
            orderDate,
          );
        } else if (request.issue.inclusive) {
          return createDateMessage(
            request,
            `Too small ${expectType} at least`,
            orderDate,
          );
        } else {
          return createDateMessage(
            request,
            `Too small ${expectType} more than`,
            orderDate,
          );
        }
      }

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
      if (["array", "string", "number", "date"].includes(request.issue.type)) {
        return this.createErrorMessage(request, request.issue.type);
      }

      const message = request.t("Invalid value");

      return { message };
    }

    return super.handle(request);
  }
}
