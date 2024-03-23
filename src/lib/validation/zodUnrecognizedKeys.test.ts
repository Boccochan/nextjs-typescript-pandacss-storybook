import { z } from "zod";

import { getTranslator } from "@/testlib";

import { setI18nZodDefaultErrorMsg } from ".";

beforeEach(async () => {
  const { t } = await getTranslator("en");
  setI18nZodDefaultErrorMsg(t);
});

describe("UnrecognizedKeys", () => {
  it("The unrecognized keys default error message in English", () => {
    const val = z.object({ name: z.string() }).strict();

    const res = val.safeParse({ name: "test", hoge: "hoge" });

    expect(res.success).toBeFalsy();

    if (res.success === false) {
      expect(res.error.errors[0].message).toBe(
        "Unrecognized key(s) in object: 'hoge'",
      );
    }
  });

  it("The unrecognized keys default error message in Japanese", async () => {
    const { t } = await getTranslator("ja");
    setI18nZodDefaultErrorMsg(t);

    const val = z.object({ name: z.string() }).strict();

    const res = val.safeParse({ name: "test", hoge: "hoge" });
    expect(res.success).toBeFalsy();

    if (res.success === false) {
      expect(res.error.errors[0].message).toBe(
        "オブジェクトの中に不明なキーがあります: 'hoge'",
      );
    }
  });
});
