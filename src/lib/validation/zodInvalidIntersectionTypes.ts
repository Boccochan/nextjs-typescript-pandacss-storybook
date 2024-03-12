import { z, ZodIssueCode } from "zod";

import { AbstractHandler } from "../chainOrResponsibility";
import type { Request, Response } from "./types";

// It was difficult to replicate intersection error,
// so we could not create a test code for it.
export class InvalidIntersectionType extends AbstractHandler<
  Request,
  Response
> {
  public handle(request: Request): Response | undefined {
    if (request.issue.code == ZodIssueCode.invalid_intersection_types) {
      const message = request.t("Intersection");

      return { message };
    }

    return super.handle(request);
  }
}
