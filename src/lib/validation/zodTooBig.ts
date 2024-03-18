import { ZodIssueCode } from "zod";

import { AbstractHandler } from "../chainOrResponsibility";
import type { Request, Response } from "./types";

export class TooBig extends AbstractHandler<Request, Response> {
  private createDateMessage(request: Request, key: string, orderDate: Date) {
    return {
      message: request.t(
        key,
        { orderDate },
        {
          dateTime: {
            short: {
              day: "numeric",
              month: "short",
              year: "numeric",
              hour: "numeric",
              minute: "numeric",
              second: "numeric",
              hour12: false,
            },
          },
        },
      ),
    };
  }

  private createErrorMessage(request: Request, expectType: string) {
    if (request.issue.code == ZodIssueCode.too_big) {
      // For Typescript
      if (request.issue.type === expectType) {
        if (expectType === "date") {
          const orderDate = new Date(Number(request.issue.maximum));

          if (request.issue.exact) {
            return this.createDateMessage(
              request,
              `Too big ${expectType} exactly`,
              orderDate,
            );
          } else if (request.issue.inclusive) {
            return this.createDateMessage(
              request,
              `Too big ${expectType} at most`,
              orderDate,
            );
          } else {
            return this.createDateMessage(
              request,
              `Too big ${expectType} less than`,
              orderDate,
            );
          }
        }

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
      if (
        ["array", "string", "number", "bigint", "date"].includes(
          request.issue.type,
        )
      ) {
        return this.createErrorMessage(request, request.issue.type);
      }

      return { message: request.t("Invalid value") };
    }

    return super.handle(request);
  }
}
