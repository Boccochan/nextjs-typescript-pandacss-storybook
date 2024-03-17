import { ZodIssueCode } from "zod";

import { AbstractHandler } from "../chainOrResponsibility";
import type { Request, Response } from "./types";

export class TooBig extends AbstractHandler<Request, Response> {
  public handle(request: Request): Response | undefined {
    if (request.issue.code == ZodIssueCode.too_big) {
      if (request.issue.type === "array") {
        const max = request.issue.maximum.toString();
        if (request.issue.exact) {
          return { message: request.t("Too big array exactly", { max }) };
        } else if (request.issue.inclusive) {
          return { message: request.t("Too big array at most", { max }) };
        } else {
          return { message: request.t("Too big array less than", { max }) };
        }
      }
      const message = request.t("Required");

      // TODO: Add error messages for number, string and so on.

      return { message };
    }

    return super.handle(request);
  }
}
