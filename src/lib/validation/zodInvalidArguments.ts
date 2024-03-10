import { ZodIssueCode } from "zod";

import { AbstractHandler } from "../chainOrResponsibility";
import type { Request, Response } from "./types";

// There is no test code for this class. That's because we could not reprecate the error in Typescript.
export class InvalidArguments extends AbstractHandler<Request, Response> {
  public handle(request: Request): Response | undefined {
    if (request.issue.code == ZodIssueCode.invalid_arguments) {
      const message = request.t("Invalid function arguments");

      return { message };
    }

    return super.handle(request);
  }
}
