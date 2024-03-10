import { z } from "zod";

import { getTranslator } from "@/testlib";

import { setI18nZodDefaultErrorMsg } from ".";

beforeEach(async () => {
  const t = await getTranslator("en");
  setI18nZodDefaultErrorMsg(t);
});

describe("Custom", () => {
  it("The refine default error message in English", () => {
    const myString = z.string().refine((val) => val.length <= 2);
    const res = myString.safeParse("111");

    expect(res.success).toBeFalsy();

    if (res.success === false) {
      expect(res.error.errors[0].message).toBe("Invalid value");
    }
  });

  it("The refine default error message in Japanese", async () => {
    const t = await getTranslator("ja");
    setI18nZodDefaultErrorMsg(t);

    const myString = z.string().refine((val) => val.length <= 2);
    const res = myString.safeParse("111");

    expect(res.success).toBeFalsy();

    if (res.success === false) {
      expect(res.error.errors[0].message).toBe("不正な値です");
    }
  });

  it("Override the refine default error message", () => {
    const myString = z
      .string()
      .refine((val) => val.length <= 2, { message: "This is test" });
    const res = myString.safeParse("111");

    expect(res.success).toBeFalsy();

    if (res.success === false) {
      expect(res.error.errors[0].message).toBe("This is test");
    }
  });
});
