import { z } from "zod";

import { getTranslator } from "@/testlib";

import { setI18nZodDefaultErrorMsg } from ".";

beforeEach(async () => {
  const { t, f } = await getTranslator("en");
  setI18nZodDefaultErrorMsg(t, f);
});

describe("InvalidDate", () => {
  it("The date default error message in English", () => {
    const res = z.date().safeParse(new Date("invalid"));

    expect(res.success).toBeFalsy();

    if (res.success === false) {
      expect(res.error.errors[0].message).toBe("Invalid date");
    }
  });

  it("The date default error message in Japan", async () => {
    const { t, f } = await getTranslator("ja");
    setI18nZodDefaultErrorMsg(t, f);

    const res = z.date().safeParse(new Date("invalid"));
    expect(res.success).toBeFalsy();

    if (res.success === false) {
      expect(res.error.errors[0].message).toBe("不正な日付です");
    }
  });
});
