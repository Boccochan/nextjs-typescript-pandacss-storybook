import { z } from "zod";

import { getTranslator } from "@/testlib";

import { setI18nZodDefaultErrorMsg } from ".";

beforeEach(async () => {
  const { t, f } = await getTranslator("en");
  setI18nZodDefaultErrorMsg(t, f);
});

describe("InvalidType", () => {
  it("The invalid type default error message in English", () => {
    const myFunction = z.string();
    const res = myFunction.safeParse(1);

    expect(res.success).toBeFalsy();

    if (res.success === false) {
      expect(res.error.errors[0].message).toBe(
        "Expected: string, received: number",
      );
    }
  });

  it("The invalid type default error message in Japanese", async () => {
    const { t, f } = await getTranslator("ja");
    setI18nZodDefaultErrorMsg(t, f);

    const myFunction = z.string();
    const res = myFunction.safeParse(1);

    expect(res.success).toBeFalsy();

    if (res.success === false) {
      expect(res.error.errors[0].message).toBe(
        "string型ではなくnumber型を受け取りました",
      );
    }
  });
});
