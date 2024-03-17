import { z } from "zod";

import { getTranslator } from "@/testlib";

import { setI18nZodDefaultErrorMsg } from ".";

beforeEach(async () => {
  const { t, f } = await getTranslator("en");
  setI18nZodDefaultErrorMsg(t, f);
});

describe("NotFinite", () => {
  it("The finite default error message in English", () => {
    const val = z.number().finite();

    const res = val.safeParse(Math.pow(10, 1000));

    expect(res.success).toBeFalsy();

    if (res.success === false) {
      expect(res.error.errors[0].message).toBe("Number must be finite");
    }
  });

  it("The finite default error message in Japanese", async () => {
    const { t, f } = await getTranslator("ja");
    setI18nZodDefaultErrorMsg(t, f);

    const val = z.number().finite();

    const res = val.safeParse(Math.pow(10, 1000));
    expect(res.success).toBeFalsy();

    if (res.success === false) {
      expect(res.error.errors[0].message).toBe(
        "数値は有限である必要があります",
      );
    }
  });
});
