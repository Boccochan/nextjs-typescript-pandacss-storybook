import { z } from "zod";

import { getTranslator } from "@/testlib";

import { setI18nZodDefaultErrorMsg } from ".";

beforeEach(async () => {
  const { t, f } = await getTranslator("en");
  setI18nZodDefaultErrorMsg(t, f);
});

describe("InvalidLiteral", () => {
  it("The literal default error message in English", () => {
    const tuna = z.literal("tuna");
    const res = tuna.safeParse("maguro");

    expect(res.success).toBeFalsy();

    if (res.success === false) {
      expect(res.error.errors[0].message).toBe(
        'Invalid literal value, expected "tuna"',
      );
    }
  });

  it("The literal default error message in Japan", async () => {
    const { t, f } = await getTranslator("ja");
    setI18nZodDefaultErrorMsg(t, f);

    const tuna = z.literal("tuna");
    const res = tuna.safeParse("maguro");

    expect(res.success).toBeFalsy();

    if (res.success === false) {
      expect(res.error.errors[0].message).toBe(
        '不正な値です。"tuna"を指定してください',
      );
    }
  });
});
