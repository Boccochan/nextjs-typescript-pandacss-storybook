import { z, ZodError } from "zod";

import { getTranslator } from "@/testlib";

import { setI18nZodDefaultErrorMsg } from ".";

beforeEach(async () => {
  const { t } = await getTranslator("en");
  setI18nZodDefaultErrorMsg(t);
});

describe("InvalidArguments", () => {
  it("The implement default error message in English", () => {
    const trimmedLength = z
      .function()
      .args(z.string()) // accepts an arbitrary number of arguments
      .returns(z.number())
      .implement((x) => {
        // TypeScript knows x is a string!
        return x.trim().length;
      });

    try {
      // @ts-expect-error: Should expect string
      trimmedLength(1);
    } catch (e) {
      if (e instanceof ZodError) {
        expect(e.errors[0].message).toBe("Invalid function arguments");
      } else {
        throw e;
      }
    }
  });

  it("The implement default error message in Japanese", async () => {
    const { t } = await getTranslator("ja");
    setI18nZodDefaultErrorMsg(t);

    const trimmedLength = z
      .function()
      .args(z.string()) // accepts an arbitrary number of arguments
      .returns(z.number())
      .implement((x) => {
        // TypeScript knows x is a string!
        return x.trim().length;
      });

    try {
      // @ts-expect-error: Should expect string
      trimmedLength(1);
    } catch (e) {
      if (e instanceof ZodError) {
        expect(e.errors[0].message).toBe("不正な引数です");
      } else {
        throw e;
      }
    }
  });
});
