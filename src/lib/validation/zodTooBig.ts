import { ZodIssueCode } from "zod";

import { AbstractHandler } from "../chainOrResponsibility";
import type { Request, Response } from "./types";

export class TooBig extends AbstractHandler<Request, Response> {
  private createErrorMessage(request: Request, expectType: string) {
    if (request.issue.code == ZodIssueCode.too_big) {
      // For Typescript
      if (request.issue.type === expectType) {
        if (expectType === "date") {
          const orderDate = new Date(Number(request.issue.maximum));

          if (request.issue.exact) {
            return {
              message: request.t(
                `Too big ${expectType} exactly`,
                {
                  orderDate,
                },
                {
                  dateTime: {
                    short: {
                      day: "numeric",
                      month: "short",
                      year: "numeric",
                      hour: "numeric",
                      minute: "numeric",
                      second: "numeric",
                    },
                  },
                },
              ),
            };
          } else if (request.issue.inclusive) {
            return {
              message: request.t(
                `Too big ${expectType} at most`,
                {
                  orderDate,
                },
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
          } else {
            return {
              message: request.t(
                `Too big ${expectType} less than`,
                {
                  orderDate,
                },
                // {
                //   dateTime: {
                //     short: {
                //       day: "numeric",
                //       month: "short",
                //       year: "numeric",
                //       hour: "numeric",
                //       minute: "numeric",
                //       second: "numeric",
                //     },
                //   },
                // },
              ),
            };
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
      const message = request.t("Required");
      // TODO: Add error messages for number, string and so on.

      return { message };
    }

    return super.handle(request);
  }
}
