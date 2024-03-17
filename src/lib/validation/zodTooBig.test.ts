import { z } from "zod";

import { getTranslator } from "@/testlib";

import { setI18nZodDefaultErrorMsg } from ".";

beforeEach(async () => {
  const t = await getTranslator("en");
  setI18nZodDefaultErrorMsg(t);
});

describe("TooBig", () => {
  it("The too big array at most default error message in English", () => {
    const val = z.array(z.string()).max(1);

    const res = val.safeParse(["hello", "hoho"]);

    expect(res.success).toBeFalsy();

    if (res.success === false) {
      expect(res.error.errors[0].message).toBe(
        "Array must contain at most 1 element(s)",
      );
    }
  });

  it("The too big array exactly default error message in English", () => {
    const val = z.array(z.string()).length(1);

    const res = val.safeParse(["hello", "hoho"]);

    expect(res.success).toBeFalsy();

    if (res.success === false) {
      expect(res.error.errors[0].message).toBe(
        "Array must contain exactly 1 element(s)",
      );
    }
  });

  it("The too big array less than default error message in English", () => {
    const val = z.array(z.string()).superRefine((val, ctx) => {
      if (val.length > 1) {
        ctx.addIssue({
          code: z.ZodIssueCode.too_big,
          maximum: 1,
          type: "array",
          inclusive: true,
        });
      }
    });

    const res = val.safeParse(["hello", "hoho"]);

    expect(res.success).toBeFalsy();

    if (res.success === false) {
      expect(res.error.errors[0].message).toBe(
        "Array must contain at most 1 element(s)",
      );
    }
  });
  it("The too big array at most default error message in Japanese", async () => {
    const t = await getTranslator("ja");
    setI18nZodDefaultErrorMsg(t);

    const val = z.array(z.string()).max(1);

    const res = val.safeParse(["hello", "hoho"]);

    expect(res.success).toBeFalsy();

    if (res.success === false) {
      expect(res.error.errors[0].message).toBe(
        "配列は最大で1要素まで含むことができます",
      );
    }
  });

  it("The too big array exactly default error message in Japanese", async () => {
    const t = await getTranslator("ja");
    setI18nZodDefaultErrorMsg(t);

    const val = z.array(z.string()).length(1);

    const res = val.safeParse(["hello", "hoho"]);

    expect(res.success).toBeFalsy();

    if (res.success === false) {
      expect(res.error.errors[0].message).toBe("配列は1要素含む必要があります");
    }
  });

  it("The too big array less than default error message in Japanese", async () => {
    const t = await getTranslator("ja");
    setI18nZodDefaultErrorMsg(t);

    const val = z.array(z.string()).superRefine((val, ctx) => {
      if (val.length > 1) {
        ctx.addIssue({
          code: z.ZodIssueCode.too_big,
          maximum: 1,
          type: "array",
          inclusive: true,
        });
      }
    });

    const res = val.safeParse(["hello", "hoho"]);

    expect(res.success).toBeFalsy();

    if (res.success === false) {
      expect(res.error.errors[0].message).toBe(
        "配列は最大で1要素まで含むことができます",
      );
    }
  });

  it("The too big string at most default error message in English", () => {
    const val = z.string().max(1);

    const res = val.safeParse("aa");

    expect(res.success).toBeFalsy();

    if (res.success === false) {
      expect(res.error.errors[0].message).toBe(
        "String must contain at most 1 character(s)",
      );
    }
  });

  it("The too big string exactly default error message in English", () => {
    const val = z.string().length(2);

    const res = val.safeParse("aaa");

    expect(res.success).toBeFalsy();

    if (res.success === false) {
      expect(res.error.errors[0].message).toBe(
        "String must contain exactly 2 character(s)",
      );
    }
  });

  it("The too big string less than default error message in English", () => {
    const val = z.string().superRefine((val, ctx) => {
      if (val.length > 2) {
        ctx.addIssue({
          code: z.ZodIssueCode.too_big,
          maximum: 2,
          type: "string",
          inclusive: false,
        });
      }
    });
    const res = val.safeParse("aaa");

    expect(res.success).toBeFalsy();

    if (res.success === false) {
      expect(res.error.errors[0].message).toBe(
        "String must contain under 2 character(s)",
      );
    }
  });

  it("The too big string at most default error message in Japanese", async () => {
    const t = await getTranslator("ja");
    setI18nZodDefaultErrorMsg(t);

    const val = z.string().max(1);

    const res = val.safeParse("aa");

    expect(res.success).toBeFalsy();

    if (res.success === false) {
      expect(res.error.errors[0].message).toBe(
        "文字列は最大で1文字まで含むことができます",
      );
    }
  });

  it("The too big string exactly default error message in Japanese", async () => {
    const t = await getTranslator("ja");
    setI18nZodDefaultErrorMsg(t);

    const val = z.string().length(2);

    const res = val.safeParse("aaa");

    expect(res.success).toBeFalsy();

    if (res.success === false) {
      expect(res.error.errors[0].message).toBe(
        "文字列は2文字含む必要があります",
      );
    }
  });

  it("The too big string less than default error message in Japanese", async () => {
    const t = await getTranslator("ja");
    setI18nZodDefaultErrorMsg(t);

    const val = z.string().superRefine((val, ctx) => {
      if (val.length > 2) {
        ctx.addIssue({
          code: z.ZodIssueCode.too_big,
          maximum: 2,
          type: "string",
          inclusive: false,
        });
      }
    });

    const res = val.safeParse("aaa");

    expect(res.success).toBeFalsy();

    if (res.success === false) {
      expect(res.error.errors[0].message).toBe(
        "文字列は2要素未満である必要があります",
      );
    }
  });
});
