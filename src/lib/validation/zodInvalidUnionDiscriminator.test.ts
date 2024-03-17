import { z } from "zod";

import { getTranslator } from "@/testlib";

import { setI18nZodDefaultErrorMsg } from ".";

beforeEach(async () => {
  const t = await getTranslator("en");
  setI18nZodDefaultErrorMsg(t);
});

describe("InvalidUnionDiscriminator", () => {
  it("The invalid union discriminator default error message in English", () => {
    const myUnion = z.discriminatedUnion("status", [
      z.object({ status: z.literal("success"), data: z.string() }),
      z.object({ status: z.literal("failed"), error: z.instanceof(Error) }),
    ]);

    const res = myUnion.safeParse({ status: "fa", error: "hello" });

    expect(res.success).toBeFalsy();

    if (res.success === false) {
      expect(res.error.errors[0].message).toBe(
        "Invalid discriminator value. Expected 'success' | 'failed'",
      );
    }
  });

  it("The invalid union discriminator default error message in Japanese", async () => {
    const t = await getTranslator("ja");
    setI18nZodDefaultErrorMsg(t);

    const myUnion = z.discriminatedUnion("status", [
      z.object({ status: z.literal("success"), data: z.string() }),
      z.object({ status: z.literal("failed"), error: z.instanceof(Error) }),
    ]);

    const res = myUnion.safeParse({ status: "fa", error: "hello" });

    expect(res.success).toBeFalsy();

    if (res.success === false) {
      expect(res.error.errors[0].message).toBe(
        "不正な識別子です。 'success' | 'failed'のいずれかを指定してください",
      );
    }
  });
});
