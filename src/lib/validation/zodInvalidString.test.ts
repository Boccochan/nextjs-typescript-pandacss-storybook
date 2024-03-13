import { z } from "zod";

import { getTranslator } from "@/testlib";

import { setI18nZodDefaultErrorMsg } from ".";

beforeEach(async () => {
  const t = await getTranslator("en");
  setI18nZodDefaultErrorMsg(t);
});

describe("InvalidString", () => {
  it("The string includes default error message in English", () => {
    const myFunction = z.string().includes("test");

    const res = myFunction.safeParse("hoge");

    expect(res.success).toBeFalsy();

    if (res.success === false) {
      expect(res.error.errors[0].message).toBe(
        'Invalid input: must include "test"',
      );
    }
  });

  it("The string includes default error message in Japan", async () => {
    const t = await getTranslator("ja");
    setI18nZodDefaultErrorMsg(t);

    const myFunction = z.string().includes("test");
    const res = myFunction.safeParse("hoge");

    expect(res.success).toBeFalsy();

    if (res.success === false) {
      expect(res.error.errors[0].message).toBe('文字列に"test"を含めて下さい');
    }
  });

  it("The string includes with position default error message in English", () => {
    const myFunction = z.string().includes("es", { position: 4 });

    const res = myFunction.safeParse("test");

    expect(res.success).toBeFalsy();

    if (res.success === false) {
      expect(res.error.errors[0].message).toBe(
        'Invalid input: must include "es" at one or more positions greater than or equal to 4',
      );
    }
  });

  it("The string includes with position default error message in Japan", async () => {
    const t = await getTranslator("ja");
    setI18nZodDefaultErrorMsg(t);

    const myFunction = z.string().includes("es", { position: 4 });

    const res = myFunction.safeParse("test");

    expect(res.success).toBeFalsy();

    if (res.success === false) {
      expect(res.error.errors[0].message).toBe(
        '4文字以上の位置に文字列に"es"を含めて下さい',
      );
    }
  });
});
