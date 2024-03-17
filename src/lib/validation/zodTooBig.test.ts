import { z } from "zod";

import { getTranslator } from "@/testlib";

import { setI18nZodDefaultErrorMsg } from ".";

beforeEach(async () => {
  const { t, f } = await getTranslator("en");
  setI18nZodDefaultErrorMsg(t, f);
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
    const { t, f } = await getTranslator("ja");
    setI18nZodDefaultErrorMsg(t, f);

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
    const { t, f } = await getTranslator("ja");
    setI18nZodDefaultErrorMsg(t, f);

    const val = z.array(z.string()).length(1);

    const res = val.safeParse(["hello", "hoho"]);

    expect(res.success).toBeFalsy();

    if (res.success === false) {
      expect(res.error.errors[0].message).toBe("配列は1要素含む必要があります");
    }
  });

  it("The too big array less than default error message in Japanese", async () => {
    const { t, f } = await getTranslator("ja");
    setI18nZodDefaultErrorMsg(t, f);

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
    const { t, f } = await getTranslator("ja");
    setI18nZodDefaultErrorMsg(t, f);

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
    const { t, f } = await getTranslator("ja");
    setI18nZodDefaultErrorMsg(t, f);

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
    const { t, f } = await getTranslator("ja");
    setI18nZodDefaultErrorMsg(t, f);

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

  it("The too big number exactly default error message in English", () => {
    const val = z.number().superRefine((val, ctx) => {
      if (val != 2) {
        ctx.addIssue({
          code: z.ZodIssueCode.too_big,
          type: "number",
          maximum: 2,
          exact: true,
          inclusive: false,
        });
      }
    });

    const res = val.safeParse(111);

    expect(res.success).toBeFalsy();

    if (res.success === false) {
      expect(res.error.errors[0].message).toBe("Number must be exactly 2");
    }
  });

  it("The too big number at most default error message in English", () => {
    const val = z.number().superRefine((val, ctx) => {
      if (val > 2) {
        ctx.addIssue({
          code: z.ZodIssueCode.too_big,
          maximum: 2,
          type: "number",
          inclusive: true,
        });
      }
    });

    const res = val.safeParse(111);

    expect(res.success).toBeFalsy();

    if (res.success === false) {
      expect(res.error.errors[0].message).toBe(
        "Number must be less than or equal to 2",
      );
    }
  });

  it("The too big number less than default error message in English", () => {
    const val = z.number().superRefine((val, ctx) => {
      if (val > 2) {
        ctx.addIssue({
          code: z.ZodIssueCode.too_big,
          maximum: 2,
          type: "number",
          inclusive: false,
        });
      }
    });

    const res = val.safeParse(111);

    expect(res.success).toBeFalsy();

    if (res.success === false) {
      expect(res.error.errors[0].message).toBe("Number must be less than 2");
    }
  });

  it("The too big number exactly default error message in Japanese", async () => {
    const { t, f } = await getTranslator("ja");
    setI18nZodDefaultErrorMsg(t, f);

    const val = z.number().superRefine((val, ctx) => {
      if (val != 2) {
        ctx.addIssue({
          code: z.ZodIssueCode.too_big,
          type: "number",
          maximum: 2,
          exact: true,
          inclusive: false,
        });
      }
    });

    const res = val.safeParse(111);

    expect(res.success).toBeFalsy();

    if (res.success === false) {
      expect(res.error.errors[0].message).toBe("数値は2である必要があります");
    }
  });

  it("The too big number at most default error message in Japanese", async () => {
    const { t, f } = await getTranslator("ja");
    setI18nZodDefaultErrorMsg(t, f);

    const val = z.number().superRefine((val, ctx) => {
      if (val > 2) {
        ctx.addIssue({
          code: z.ZodIssueCode.too_big,
          maximum: 2,
          type: "number",
          inclusive: true,
        });
      }
    });

    const res = val.safeParse(111);

    expect(res.success).toBeFalsy();

    if (res.success === false) {
      expect(res.error.errors[0].message).toBe(
        "数値は2以下である必要があります",
      );
    }
  });

  it("The too big number less than default error message in Japanese", async () => {
    const { t, f } = await getTranslator("ja");
    setI18nZodDefaultErrorMsg(t, f);

    const val = z.number().superRefine((val, ctx) => {
      if (val > 2) {
        ctx.addIssue({
          code: z.ZodIssueCode.too_big,
          maximum: 2,
          type: "number",
          inclusive: false,
        });
      }
    });

    const res = val.safeParse(111);

    expect(res.success).toBeFalsy();

    if (res.success === false) {
      expect(res.error.errors[0].message).toBe(
        "数値は2未満である必要があります",
      );
    }
  });

  it("The too big bigint exactly default error message in English", () => {
    const val = z.bigint().superRefine((val, ctx) => {
      if (val.toString() != "2") {
        ctx.addIssue({
          code: z.ZodIssueCode.too_big,
          type: "bigint",
          maximum: 2,
          exact: true,
          inclusive: false,
        });
      }
    });

    const res = val.safeParse(BigInt("1"));

    expect(res.success).toBeFalsy();

    if (res.success === false) {
      expect(res.error.errors[0].message).toBe("BigInt must be exactly 2");
    }
  });

  it("The too big number at most default error message in English", () => {
    const val = z.bigint().superRefine((val, ctx) => {
      if (val.toString() != "2") {
        ctx.addIssue({
          code: z.ZodIssueCode.too_big,
          maximum: 2,
          type: "bigint",
          inclusive: true,
        });
      }
    });

    const res = val.safeParse(BigInt("1"));

    expect(res.success).toBeFalsy();

    if (res.success === false) {
      expect(res.error.errors[0].message).toBe(
        "BigInt must be less than or equal to 2",
      );
    }
  });

  it("The too big number less than default error message in English", () => {
    const val = z.bigint().superRefine((val, ctx) => {
      if (val.toString() != "2") {
        ctx.addIssue({
          code: z.ZodIssueCode.too_big,
          maximum: 2,
          type: "bigint",
          inclusive: false,
        });
      }
    });

    const res = val.safeParse(BigInt("1"));

    expect(res.success).toBeFalsy();

    if (res.success === false) {
      expect(res.error.errors[0].message).toBe("BigInt must be less than 2");
    }
  });

  it("The too big bigint exactly default error message in Japanese", async () => {
    const { t, f } = await getTranslator("ja");
    setI18nZodDefaultErrorMsg(t, f);

    const val = z.bigint().superRefine((val, ctx) => {
      if (val.toString() != "2") {
        ctx.addIssue({
          code: z.ZodIssueCode.too_big,
          type: "bigint",
          maximum: 2,
          exact: true,
          inclusive: false,
        });
      }
    });

    const res = val.safeParse(BigInt("1"));

    expect(res.success).toBeFalsy();

    if (res.success === false) {
      expect(res.error.errors[0].message).toBe("数値は2である必要があります");
    }
  });

  it("The too big number at most default error message in Japanese", async () => {
    const { t, f } = await getTranslator("ja");
    setI18nZodDefaultErrorMsg(t, f);

    const val = z.bigint().superRefine((val, ctx) => {
      if (val.toString() != "2") {
        ctx.addIssue({
          code: z.ZodIssueCode.too_big,
          maximum: 2,
          type: "bigint",
          inclusive: true,
        });
      }
    });

    const res = val.safeParse(BigInt("1"));

    expect(res.success).toBeFalsy();

    if (res.success === false) {
      expect(res.error.errors[0].message).toBe(
        "数値は2以下である必要があります",
      );
    }
  });

  it("The too big number less than default error message in Japanese", async () => {
    const { t, f } = await getTranslator("ja");
    setI18nZodDefaultErrorMsg(t, f);

    const val = z.bigint().superRefine((val, ctx) => {
      if (val.toString() != "2") {
        ctx.addIssue({
          code: z.ZodIssueCode.too_big,
          maximum: 2,
          type: "bigint",
          inclusive: false,
        });
      }
    });

    const res = val.safeParse(BigInt("1"));

    expect(res.success).toBeFalsy();

    if (res.success === false) {
      expect(res.error.errors[0].message).toBe("数値は2である必要があります");
    }
  });

  // it("The too big date exactly default error message in English", () => {
  //   const val = z.date().superRefine((val, ctx) => {
  //     const d = new Date("1900-01-01");
  //     if (val != d) {
  //       ctx.addIssue({
  //         code: z.ZodIssueCode.too_big,
  //         type: "date",
  //         maximum: d,
  //         exact: true,
  //         inclusive: false,
  //       });
  //     }
  //   });

  //   const res = val.safeParse(new Date("2023-03-17"));

  //   expect(res.success).toBeFalsy();

  //   if (res.success === false) {
  //     expect(res.error.errors[0].message).toBe("BigInt must be exactly 2");
  //   }
  // });

  it("The too big date at most default error message in English", () => {
    const val = z.date().max(new Date("2013-11-20"));

    const res = val.safeParse(new Date("2023-03-17"));

    expect(res.success).toBeFalsy();

    if (res.success === false) {
      expect(res.error.errors[0].message).toBe(
        "Date must be less than or equal to 2013-11-20T00:00:00.000Z",
      );
    }
  });

  // it("The too big date less than default error message in English", () => {
  //   const val = z.bigint().superRefine((val, ctx) => {
  //     if (val.toString() != "2") {
  //       ctx.addIssue({
  //         code: z.ZodIssueCode.too_big,
  //         maximum: 2,
  //         type: "bigint",
  //         inclusive: false,
  //       });
  //     }
  //   });

  //   const res = val.safeParse(BigInt("1"));

  //   expect(res.success).toBeFalsy();

  //   if (res.success === false) {
  //     expect(res.error.errors[0].message).toBe("BigInt must be less than 2");
  //   }
  // });
});
