import { z } from "zod";

import { getTranslator } from "@/testlib";

import { setI18nZodDefaultErrorMsg } from ".";

beforeEach(async () => {
  const { t } = await getTranslator("en");
  setI18nZodDefaultErrorMsg(t);
});

describe("TooSmall", () => {
  it("The too small array at least default error message in English", () => {
    const val = z.array(z.string()).min(2);

    const res = val.safeParse(["hello"]);

    expect(res.success).toBeFalsy();

    if (res.success === false) {
      expect(res.error.errors[0].message).toBe(
        "Array must contain at least 2 element(s)",
      );
    }
  });
  it("The too small array at least default error message in Japanese", async () => {
    const { t } = await getTranslator("ja");
    setI18nZodDefaultErrorMsg(t);

    const val = z.array(z.string()).min(2);

    const res = val.safeParse(["hello"]);

    expect(res.success).toBeFalsy();

    if (res.success === false) {
      expect(res.error.errors[0].message).toBe(
        "配列は少なくとも2要素含む必要があります",
      );
    }
  });

  it("The too small array more than default error message in English", () => {
    const val = z.array(z.string()).superRefine((val, ctx) => {
      ctx.addIssue({
        code: z.ZodIssueCode.too_small,
        minimum: 1,
        type: "array",
        inclusive: false,
      });
    });

    const res = val.safeParse(["hello"]);
    expect(res.success).toBeFalsy();

    if (res.success === false) {
      expect(res.error.errors[0].message).toBe(
        "Array must contain more than 1 element(s)",
      );
    }
  });

  it("The too small array more than default error message in Japanese", async () => {
    const { t } = await getTranslator("ja");
    setI18nZodDefaultErrorMsg(t);

    const val = z.array(z.string()).superRefine((val, ctx) => {
      ctx.addIssue({
        code: z.ZodIssueCode.too_small,
        minimum: 1,
        type: "array",
        inclusive: false,
      });
    });

    const res = val.safeParse(["hello"]);
    expect(res.success).toBeFalsy();

    if (res.success === false) {
      expect(res.error.errors[0].message).toBe(
        "配列は1要素より大きい必要があります",
      );
    }
  });

  it("The too small exactly than default error message in English", () => {
    const val = z.array(z.string()).superRefine((val, ctx) => {
      ctx.addIssue({
        code: z.ZodIssueCode.too_small,
        minimum: 1,
        type: "array",
        exact: true,
        inclusive: false,
      });
    });

    const res = val.safeParse(["hello"]);
    expect(res.success).toBeFalsy();

    if (res.success === false) {
      expect(res.error.errors[0].message).toBe(
        "Array must contain exactly 1 element(s)",
      );
    }
  });

  it("The too small exactly than default error message in Japanese", async () => {
    const { t } = await getTranslator("ja");
    setI18nZodDefaultErrorMsg(t);

    const val = z.array(z.string()).superRefine((val, ctx) => {
      ctx.addIssue({
        code: z.ZodIssueCode.too_small,
        minimum: 1,
        type: "array",
        exact: true,
        inclusive: false,
      });
    });

    const res = val.safeParse(["hello"]);
    expect(res.success).toBeFalsy();

    if (res.success === false) {
      expect(res.error.errors[0].message).toBe("配列は1要素含む必要があります");
    }
  });

  it("The too small string at least default error message in English", () => {
    const val = z.string().min(2);

    const res = val.safeParse("h");

    expect(res.success).toBeFalsy();

    if (res.success === false) {
      expect(res.error.errors[0].message).toBe(
        "String must contain at least 2 element(s)",
      );
    }
  });

  it("The too small string at least default error message in Japanese", async () => {
    const { t } = await getTranslator("ja");
    setI18nZodDefaultErrorMsg(t);

    const val = z.string().min(2);

    const res = val.safeParse("h");

    expect(res.success).toBeFalsy();

    if (res.success === false) {
      expect(res.error.errors[0].message).toBe(
        "文字列は少なくとも2文字含む必要があります",
      );
    }
  });

  it("The too small string more than default error message in English", () => {
    const val = z.string().superRefine((val, ctx) => {
      ctx.addIssue({
        code: z.ZodIssueCode.too_small,
        minimum: 1,
        type: "string",
        inclusive: false,
      });
    });

    const res = val.safeParse("h");
    expect(res.success).toBeFalsy();

    if (res.success === false) {
      expect(res.error.errors[0].message).toBe(
        "String must contain over 1 element(s)",
      );
    }
  });

  it("The too small string more than default error message in Japanese", async () => {
    const { t } = await getTranslator("ja");
    setI18nZodDefaultErrorMsg(t);

    const val = z.string().superRefine((val, ctx) => {
      ctx.addIssue({
        code: z.ZodIssueCode.too_small,
        minimum: 1,
        type: "string",
        inclusive: false,
      });
    });

    const res = val.safeParse("h");
    expect(res.success).toBeFalsy();

    if (res.success === false) {
      expect(res.error.errors[0].message).toBe(
        "文字列は1文字より大きい必要があります",
      );
    }
  });

  it("The too small string exactly default error message in English", () => {
    const val = z.string().superRefine((val, ctx) => {
      ctx.addIssue({
        code: z.ZodIssueCode.too_small,
        minimum: 1,
        type: "string",
        exact: true,
        inclusive: false,
      });
    });

    const res = val.safeParse("h");
    expect(res.success).toBeFalsy();

    if (res.success === false) {
      expect(res.error.errors[0].message).toBe(
        "String must contain exactly 1 element(s)",
      );
    }
  });

  it("The too small string more than default error message in Japanese", async () => {
    const { t } = await getTranslator("ja");
    setI18nZodDefaultErrorMsg(t);

    const val = z.string().superRefine((val, ctx) => {
      ctx.addIssue({
        code: z.ZodIssueCode.too_small,
        minimum: 1,
        type: "string",
        exact: true,
        inclusive: false,
      });
    });

    const res = val.safeParse("h");
    expect(res.success).toBeFalsy();

    if (res.success === false) {
      expect(res.error.errors[0].message).toBe(
        "文字列は1文字含む必要があります",
      );
    }
  });

  it("The too small number at least default error message in English", () => {
    const val = z.number().superRefine((val, ctx) => {
      ctx.addIssue({
        code: z.ZodIssueCode.too_small,
        minimum: 1,
        type: "number",
        inclusive: true,
      });
    });

    const res = val.safeParse(2);

    expect(res.success).toBeFalsy();

    if (res.success === false) {
      expect(res.error.errors[0].message).toBe(
        "Number must be greater than or equal to 1 element(s)",
      );
    }
  });

  it("The too small number at least default error message in Japanese", async () => {
    const { t } = await getTranslator("ja");
    setI18nZodDefaultErrorMsg(t);

    const val = z.number().superRefine((val, ctx) => {
      ctx.addIssue({
        code: z.ZodIssueCode.too_small,
        minimum: 1,
        type: "number",
        inclusive: true,
      });
    });

    const res = val.safeParse(2);

    expect(res.success).toBeFalsy();

    if (res.success === false) {
      expect(res.error.errors[0].message).toBe(
        "数値は少なくとも1である必要があります",
      );
    }
  });

  it("The too small number more than default error message in English", () => {
    const val = z.number().superRefine((val, ctx) => {
      ctx.addIssue({
        code: z.ZodIssueCode.too_small,
        minimum: 1,
        type: "number",
        inclusive: false,
      });
    });

    const res = val.safeParse(2);

    expect(res.success).toBeFalsy();

    if (res.success === false) {
      expect(res.error.errors[0].message).toBe(
        "Number must be greater than 1 element(s)",
      );
    }
  });

  it("The too small number more than default error message in Japanese", async () => {
    const { t } = await getTranslator("ja");
    setI18nZodDefaultErrorMsg(t);

    const val = z.number().superRefine((val, ctx) => {
      ctx.addIssue({
        code: z.ZodIssueCode.too_small,
        minimum: 1,
        type: "number",
        inclusive: false,
      });
    });

    const res = val.safeParse(2);

    expect(res.success).toBeFalsy();

    if (res.success === false) {
      expect(res.error.errors[0].message).toBe(
        "数値は1より大きい必要があります",
      );
    }
  });

  it("The too small number exactly default error message in English", () => {
    const val = z.number().superRefine((val, ctx) => {
      ctx.addIssue({
        code: z.ZodIssueCode.too_small,
        minimum: 1,
        type: "number",
        exact: true,
        inclusive: false,
      });
    });

    const res = val.safeParse(2);

    expect(res.success).toBeFalsy();

    if (res.success === false) {
      expect(res.error.errors[0].message).toBe(
        "Number must be exactly equal to 1 element(s)",
      );
    }
  });

  it("The too small number exactly default error message in Japanese", async () => {
    const { t } = await getTranslator("ja");
    setI18nZodDefaultErrorMsg(t);

    const val = z.number().superRefine((val, ctx) => {
      ctx.addIssue({
        code: z.ZodIssueCode.too_small,
        minimum: 1,
        type: "number",
        exact: true,
        inclusive: false,
      });
    });

    const res = val.safeParse(2);

    expect(res.success).toBeFalsy();

    if (res.success === false) {
      expect(res.error.errors[0].message).toBe("数値は1である必要があります");
    }
  });

  it("The too small date more than default error message in English", () => {
    const val = z.date().superRefine((val, ctx) => {
      ctx.addIssue({
        code: z.ZodIssueCode.too_small,
        minimum: 1,
        type: "date",
        inclusive: false,
      });
    });

    const res = val.safeParse(new Date("2023-03-17"));

    expect(res.success).toBeFalsy();

    if (res.success === false) {
      expect(res.error.errors[0].message).toBe(
        "Date must be greater than Jan 1, 1970, 09:00:00",
      );
    }
  });

  it("The too small date more than default error message in Japanese", async () => {
    const { t } = await getTranslator("ja");
    setI18nZodDefaultErrorMsg(t);

    const val = z.date().superRefine((val, ctx) => {
      ctx.addIssue({
        code: z.ZodIssueCode.too_small,
        minimum: 1,
        type: "date",
        inclusive: false,
      });
    });

    const res = val.safeParse(new Date("2023-03-17"));

    expect(res.success).toBeFalsy();

    if (res.success === false) {
      expect(res.error.errors[0].message).toBe(
        "日付は1970年1月1日 9:00:00よりも後である必要があります",
      );
    }
  });

  it("The too small date at least default error message in English", () => {
    const val = z.date().superRefine((val, ctx) => {
      ctx.addIssue({
        code: z.ZodIssueCode.too_small,
        minimum: 1,
        type: "date",
        inclusive: true,
      });
    });

    const res = val.safeParse(new Date("2023-03-17"));

    expect(res.success).toBeFalsy();

    if (res.success === false) {
      expect(res.error.errors[0].message).toBe(
        "Date must be greater than or equal to Jan 1, 1970, 09:00:00",
      );
    }
  });

  it("The too small date at least default error message in Japanese", async () => {
    const { t } = await getTranslator("ja");
    setI18nZodDefaultErrorMsg(t);

    const val = z.date().superRefine((val, ctx) => {
      ctx.addIssue({
        code: z.ZodIssueCode.too_small,
        minimum: 1,
        type: "date",
        inclusive: true,
      });
    });

    const res = val.safeParse(new Date("2023-03-17"));

    expect(res.success).toBeFalsy();

    if (res.success === false) {
      expect(res.error.errors[0].message).toBe(
        "日付は1970年1月1日 9:00:00以降である必要があります",
      );
    }
  });

  it("The too small date exactly default error message in English", () => {
    const val = z.date().superRefine((val, ctx) => {
      ctx.addIssue({
        code: z.ZodIssueCode.too_small,
        minimum: 1,
        type: "date",
        exact: true,
        inclusive: false,
      });
    });

    const res = val.safeParse(new Date("2023-03-17"));

    expect(res.success).toBeFalsy();

    if (res.success === false) {
      expect(res.error.errors[0].message).toBe(
        "Date must be exactly equal to Jan 1, 1970, 09:00:00",
      );
    }
  });

  it("The too small date exactly default error message in Japanese", async () => {
    const { t } = await getTranslator("ja");
    setI18nZodDefaultErrorMsg(t);

    const val = z.date().superRefine((val, ctx) => {
      ctx.addIssue({
        code: z.ZodIssueCode.too_small,
        minimum: 1,
        type: "date",
        exact: true,
        inclusive: false,
      });
    });

    const res = val.safeParse(new Date("2023-03-17"));

    expect(res.success).toBeFalsy();

    if (res.success === false) {
      expect(res.error.errors[0].message).toBe(
        "日付は1970年1月1日 9:00:00である必要があります",
      );
    }
  });
});
