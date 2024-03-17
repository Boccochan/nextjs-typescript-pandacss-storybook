import { z } from "zod";

import { getTranslator } from "@/testlib";

import { setI18nZodDefaultErrorMsg } from ".";

beforeEach(async () => {
  const t = await getTranslator("en");
  setI18nZodDefaultErrorMsg(t);
});

describe("TooBig", () => {
  it("The too big array at most default error message in English", () => {
    const val = z.array(z.string()).max(1);

    const res = val.safeParse(["hello", "hoho"]);

    expect(res.success).toBeFalsy();

    if (res.success === false) {
      expect(res.error.errors[0].message).toBe(
        "Array must contain at most 1 element(s)",
      );
    }
  });

  it("The too big array exactly default error message in English", () => {
    const val = z.array(z.string()).length(1);

    const res = val.safeParse(["hello", "hoho"]);

    expect(res.success).toBeFalsy();

    if (res.success === false) {
      expect(res.error.errors[0].message).toBe(
        "Array must contain exactly 1 element(s)",
      );
    }
  });

  it("The too big array less than default error message in English", () => {
    const val = z.array(z.string()).superRefine((val, ctx) => {
      if (val.length > 1) {
        ctx.addIssue({
          code: z.ZodIssueCode.too_big,
          maximum: 1,
          type: "array",
          inclusive: true,
        });
      }
    });

    const res = val.safeParse(["hello", "hoho"]);

    expect(res.success).toBeFalsy();

    if (res.success === false) {
      expect(res.error.errors[0].message).toBe(
        "Array must contain at most 1 element(s)",
      );
    }
  });

  // it("The finite default error message in Japanese", async () => {
  //   const t = await getTranslator("ja");
  //   setI18nZodDefaultErrorMsg(t);

  //   const myUnion = z.number().multipleOf(5);

  //   const res = myUnion.safeParse(3);

  //   expect(res.success).toBeFalsy();

  //   if (res.success === false) {
  //     expect(res.error.errors[0].message).toBe(
  //       "値は5の倍数である必要があります",
  //     );
  //   }
  // });
});