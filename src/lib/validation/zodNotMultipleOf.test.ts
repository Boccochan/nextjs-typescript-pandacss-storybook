import { z } from "zod";

import { getTranslator } from "@/testlib";

import { setI18nZodDefaultErrorMsg } from ".";

beforeEach(async () => {
  const t = await getTranslator("en");
  setI18nZodDefaultErrorMsg(t);
});

describe("NotMultipleOf", () => {
  it("The multiple of default error message in English", () => {
    const myUnion = z.number().multipleOf(5);

    const res = myUnion.safeParse(3);

    expect(res.success).toBeFalsy();

    if (res.success === false) {
      expect(res.error.errors[0].message).toBe(
        "Number must be a multiple of 5",
      );
    }
  });

  it("The finite default error message in Japanese", async () => {
    const t = await getTranslator("ja");
    setI18nZodDefaultErrorMsg(t);

    const myUnion = z.number().multipleOf(5);

    const res = myUnion.safeParse(3);

    expect(res.success).toBeFalsy();

    if (res.success === false) {
      expect(res.error.errors[0].message).toBe(
        "値は5の倍数である必要があります",
      );
    }
  });
});
