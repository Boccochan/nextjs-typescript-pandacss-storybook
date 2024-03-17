import { z } from "zod";

import { getTranslator } from "@/testlib";

import { setI18nZodDefaultErrorMsg } from ".";

beforeEach(async () => {
  const { t, f } = await getTranslator("en");
  setI18nZodDefaultErrorMsg(t, f);
});

describe("InvalidArguments", () => {
  it("The implement default error message in English", () => {
    const fishEnum = z.enum(["Salmon", "Tuna"]);
    const res = fishEnum.safeParse("AAA");

    expect(res.success).toBeFalsy();

    if (res.success === false) {
      expect(res.error.errors[0].message).toBe(
        "Invalid value. Expected 'Salmon' | 'Tuna', received AAA",
      );
    }
  });

  it("The implement default error message in Japanese", async () => {
    const { t, f } = await getTranslator("ja");
    setI18nZodDefaultErrorMsg(t, f);

    const fishEnum = z.enum(["Salmon", "Tuna"]);
    const res = fishEnum.safeParse("AAA");

    expect(res.success).toBeFalsy();

    if (res.success === false) {
      expect(res.error.errors[0].message).toBe(
        "不正な値です。AAAが指定されましたが、'Salmon' | 'Tuna'のいずれかを指定してください",
      );
    }
  });
});
