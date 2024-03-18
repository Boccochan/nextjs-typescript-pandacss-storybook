import { z, ZodError } from "zod";

import { getTranslator } from "@/testlib";

import { setI18nZodDefaultErrorMsg } from ".";

beforeEach(async () => {
  const { t } = await getTranslator("en");
  setI18nZodDefaultErrorMsg(t);
});

describe("InvalidReturnType", () => {
  it("The return type default error message in English", () => {
    const myFunction = z
      .function()
      .returns(z.boolean())
      // @ts-expect-error: Should expect string
      .implement(() => "hoge");

    try {
      myFunction();
    } catch (e) {
      if (e instanceof ZodError) {
        expect(e.errors[0].message).toBe("Invalid function return type");
      }
    }
  });

  it("The literal default error message in Japan", async () => {
    const { t } = await getTranslator("ja");
    setI18nZodDefaultErrorMsg(t);

    const myFunction = z
      .function()
      .returns(z.boolean())
      // @ts-expect-error: Should expect string
      .implement(() => "hoge");

    try {
      myFunction();
    } catch (e) {
      if (e instanceof ZodError) {
        expect(e.errors[0].message).toBe("不正な戻り値です");
      }
    }
  });
});
