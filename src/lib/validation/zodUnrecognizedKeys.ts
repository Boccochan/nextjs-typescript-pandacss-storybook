import { util, ZodIssueCode } from "zod";

import { AbstractHandler } from "../chainOrResponsibility";
import type { Request, Response } from "./types";

export class UnrecognizedKeys extends AbstractHandler<Request, Response> {
  public handle(request: Request): Response | undefined {
    if (request.issue.code == ZodIssueCode.unrecognized_keys) {
      const keys = util.joinValues(request.issue.keys, ", ");
      const message = request.t("Unrecognized key", { keys });

      return { message };
    }

    return super.handle(request);
  }
}
