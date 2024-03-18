import { util, z } from "zod";

import type { Translation } from "./types";
import { Custom } from "./zodCustom";
import { InvalidArguments } from "./zodInvalidArguments";
import { InvalidDate } from "./zodInvalidDate";
import { InvalidUnionEnumValue } from "./zodInvalidEnumValue";
import { InvalidIntersectionType } from "./zodInvalidIntersectionTypes";
import { InvalidLiteral } from "./zodInvalidLiteral";
import { InvalidReturnType } from "./zodInvalidReturnType";
import { InvalidString } from "./zodInvalidString";
import { InvalidType } from "./zodInvalidType";
import { InvalidUnion } from "./zodInvalidUnion";
import { InvalidUnionDiscriminator } from "./zodInvalidUnionDiscriminator";
import { NotFinite } from "./zodNotFinite";
import { NotMultipleOf } from "./zodNotMultipleOf";
import { TooBig } from "./zodTooBig";
import { TooSmall } from "./zodTooSmall";
import { UnrecognizedKeys } from "./zodUnrecognizedKeys";

const invaidType = new InvalidType();
const invalidString = new InvalidString();
const invalidLiteral = new InvalidLiteral();
const unrecognizedKeys = new UnrecognizedKeys();
const invalidUnion = new InvalidUnion();
const invalidUnionDiscriminator = new InvalidUnionDiscriminator();
const invalidUnionEnumValue = new InvalidUnionEnumValue();
const invalidArguments = new InvalidArguments();
const invalidReturnType = new InvalidReturnType();
const invalidDate = new InvalidDate();
const tooSmall = new TooSmall();
const tooBig = new TooBig();
const custom = new Custom();
const invalidIntersectionType = new InvalidIntersectionType();
const notMultipleOf = new NotMultipleOf();
const notFinite = new NotFinite();

invaidType
  .setNext(invalidLiteral)
  .setNext(invalidString)
  .setNext(unrecognizedKeys)
  .setNext(invalidUnion)
  .setNext(invalidUnionDiscriminator)
  .setNext(invalidUnionEnumValue)
  .setNext(invalidArguments)
  .setNext(invalidReturnType)
  .setNext(invalidDate)
  .setNext(tooSmall)
  .setNext(tooBig)
  .setNext(custom)
  .setNext(invalidIntersectionType)
  .setNext(notMultipleOf)
  .setNext(notFinite);

/**
 * Set error map to support i18n by zod.
 * The default error messages of zod does not support i18n.
 * This function should be called at the top component
 * of the client component, such as Layout.tsx.
 */
export const setI18nZodDefaultErrorMsg = (t: Translation) => {
  const customErrorMap: z.ZodErrorMap = (issue, ctx) => {
    const res = invaidType.handle({ issue, ctx, t });

    if (!res) {
      util.assertNever(issue as never);
    }

    return { message: res.message };
  };

  z.setErrorMap(customErrorMap);
};
