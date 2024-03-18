import { z } from "zod";

import { getTranslator } from "@/testlib";

import { setI18nZodDefaultErrorMsg } from ".";

beforeEach(async () => {
  const { t } = await getTranslator("en");
  setI18nZodDefaultErrorMsg(t);
});

describe("InvalidUnion", () => {
  it("The invalid union default error message in English", () => {
    const myFunction = z.union([z.string(), z.number()]);
    const res = myFunction.safeParse(undefined);

    expect(res.success).toBeFalsy();

    if (res.success === false) {
      expect(res.error.errors[0].message).toBe("Invalid value");
    }
  });

  it("The invalid type default error message in Japanese", async () => {
    const { t } = await getTranslator("ja");
    setI18nZodDefaultErrorMsg(t);

    const myFunction = z.union([z.string(), z.number()]);
    const res = myFunction.safeParse(undefined);

    expect(res.success).toBeFalsy();

    if (res.success === false) {
      expect(res.error.errors[0].message).toBe("不正な値です");
    }
  });
});
