import { ZodIssueCode } from "zod";

import { AbstractHandler } from "../chainOrResponsibility";
import type { Request, Response } from "./types";

export class InvalidUnionDiscriminator extends AbstractHandler<
  Request,
  Response
> {
  public handle(request: Request): Response | undefined {
    if (request.issue.code == ZodIssueCode.invalid_union_discriminator) {
      const message = request.t("Required");

      // TODO: Add error messages for number, string and so on.

      return { message };
    }

    return super.handle(request);
  }
}
