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
        "String must contain more than 1 element(s)",
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
        "Number must be at least 1 element(s)",
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
        "Number must be more than 1 element(s)",
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
        "数値は1文字より大きい必要があります",
      );
    }
  });
  // it("The too big array at most default error message in Japanese", async () => {
  //   const { t } = await getTranslator("ja");
  //   setI18nZodDefaultErrorMsg(t);

  //   const val = z.array(z.string()).max(1);

  //   const res = val.safeParse(["hello", "hoho"]);

  //   expect(res.success).toBeFalsy();

  //   if (res.success === false) {
  //     expect(res.error.errors[0].message).toBe(
  //       "配列は最大で1要素まで含むことができます",
  //     );
  //   }
  // });

  // it("The too big array exactly default error message in Japanese", async () => {
  //   const { t } = await getTranslator("ja");
  //   setI18nZodDefaultErrorMsg(t);

  //   const val = z.array(z.string()).length(1);

  //   const res = val.safeParse(["hello", "hoho"]);

  //   expect(res.success).toBeFalsy();

  //   if (res.success === false) {
  //     expect(res.error.errors[0].message).toBe("配列は1要素含む必要があります");
  //   }
  // });

  // it("The too big array less than default error message in Japanese", async () => {
  //   const { t } = await getTranslator("ja");
  //   setI18nZodDefaultErrorMsg(t);

  //   const val = z.array(z.string()).superRefine((val, ctx) => {
  //     if (val.length > 1) {
  //       ctx.addIssue({
  //         code: z.ZodIssueCode.too_big,
  //         maximum: 1,
  //         type: "array",
  //         inclusive: true,
  //       });
  //     }
  //   });

  //   const res = val.safeParse(["hello", "hoho"]);

  //   expect(res.success).toBeFalsy();

  //   if (res.success === false) {
  //     expect(res.error.errors[0].message).toBe(
  //       "配列は最大で1要素まで含むことができます",
  //     );
  //   }
  // });

  // it("The too big string at most default error message in English", () => {
  //   const val = z.string().max(1);

  //   const res = val.safeParse("aa");

  //   expect(res.success).toBeFalsy();

  //   if (res.success === false) {
  //     expect(res.error.errors[0].message).toBe(
  //       "String must contain at most 1 character(s)",
  //     );
  //   }
  // });

  // it("The too big string exactly default error message in English", () => {
  //   const val = z.string().length(2);

  //   const res = val.safeParse("aaa");

  //   expect(res.success).toBeFalsy();

  //   if (res.success === false) {
  //     expect(res.error.errors[0].message).toBe(
  //       "String must contain exactly 2 character(s)",
  //     );
  //   }
  // });

  // it("The too big string less than default error message in English", () => {
  //   const val = z.string().superRefine((val, ctx) => {
  //     if (val.length > 2) {
  //       ctx.addIssue({
  //         code: z.ZodIssueCode.too_big,
  //         maximum: 2,
  //         type: "string",
  //         inclusive: false,
  //       });
  //     }
  //   });
  //   const res = val.safeParse("aaa");

  //   expect(res.success).toBeFalsy();

  //   if (res.success === false) {
  //     expect(res.error.errors[0].message).toBe(
  //       "String must contain under 2 character(s)",
  //     );
  //   }
  // });

  // it("The too big string at most default error message in Japanese", async () => {
  //   const { t } = await getTranslator("ja");
  //   setI18nZodDefaultErrorMsg(t);

  //   const val = z.string().max(1);

  //   const res = val.safeParse("aa");

  //   expect(res.success).toBeFalsy();

  //   if (res.success === false) {
  //     expect(res.error.errors[0].message).toBe(
  //       "文字列は最大で1文字まで含むことができます",
  //     );
  //   }
  // });

  // it("The too big string exactly default error message in Japanese", async () => {
  //   const { t } = await getTranslator("ja");
  //   setI18nZodDefaultErrorMsg(t);

  //   const val = z.string().length(2);

  //   const res = val.safeParse("aaa");

  //   expect(res.success).toBeFalsy();

  //   if (res.success === false) {
  //     expect(res.error.errors[0].message).toBe(
  //       "文字列は2文字含む必要があります",
  //     );
  //   }
  // });

  // it("The too big string less than default error message in Japanese", async () => {
  //   const { t } = await getTranslator("ja");
  //   setI18nZodDefaultErrorMsg(t);

  //   const val = z.string().superRefine((val, ctx) => {
  //     if (val.length > 2) {
  //       ctx.addIssue({
  //         code: z.ZodIssueCode.too_big,
  //         maximum: 2,
  //         type: "string",
  //         inclusive: false,
  //       });
  //     }
  //   });

  //   const res = val.safeParse("aaa");

  //   expect(res.success).toBeFalsy();

  //   if (res.success === false) {
  //     expect(res.error.errors[0].message).toBe(
  //       "文字列は2要素未満である必要があります",
  //     );
  //   }
  // });

  // it("The too big number exactly default error message in English", () => {
  //   const val = z.number().superRefine((val, ctx) => {
  //     if (val != 2) {
  //       ctx.addIssue({
  //         code: z.ZodIssueCode.too_big,
  //         type: "number",
  //         maximum: 2,
  //         exact: true,
  //         inclusive: false,
  //       });
  //     }
  //   });

  //   const res = val.safeParse(111);

  //   expect(res.success).toBeFalsy();

  //   if (res.success === false) {
  //     expect(res.error.errors[0].message).toBe("Number must be exactly 2");
  //   }
  // });

  // it("The too big number at most default error message in English", () => {
  //   const val = z.number().superRefine((val, ctx) => {
  //     if (val > 2) {
  //       ctx.addIssue({
  //         code: z.ZodIssueCode.too_big,
  //         maximum: 2,
  //         type: "number",
  //         inclusive: true,
  //       });
  //     }
  //   });

  //   const res = val.safeParse(111);

  //   expect(res.success).toBeFalsy();

  //   if (res.success === false) {
  //     expect(res.error.errors[0].message).toBe(
  //       "Number must be less than or equal to 2",
  //     );
  //   }
  // });

  // it("The too big number less than default error message in English", () => {
  //   const val = z.number().superRefine((val, ctx) => {
  //     if (val > 2) {
  //       ctx.addIssue({
  //         code: z.ZodIssueCode.too_big,
  //         maximum: 2,
  //         type: "number",
  //         inclusive: false,
  //       });
  //     }
  //   });

  //   const res = val.safeParse(111);

  //   expect(res.success).toBeFalsy();

  //   if (res.success === false) {
  //     expect(res.error.errors[0].message).toBe("Number must be less than 2");
  //   }
  // });

  // it("The too big number exactly default error message in Japanese", async () => {
  //   const { t } = await getTranslator("ja");
  //   setI18nZodDefaultErrorMsg(t);

  //   const val = z.number().superRefine((val, ctx) => {
  //     if (val != 2) {
  //       ctx.addIssue({
  //         code: z.ZodIssueCode.too_big,
  //         type: "number",
  //         maximum: 2,
  //         exact: true,
  //         inclusive: false,
  //       });
  //     }
  //   });

  //   const res = val.safeParse(111);

  //   expect(res.success).toBeFalsy();

  //   if (res.success === false) {
  //     expect(res.error.errors[0].message).toBe("数値は2である必要があります");
  //   }
  // });

  // it("The too big number at most default error message in Japanese", async () => {
  //   const { t } = await getTranslator("ja");
  //   setI18nZodDefaultErrorMsg(t);

  //   const val = z.number().superRefine((val, ctx) => {
  //     if (val > 2) {
  //       ctx.addIssue({
  //         code: z.ZodIssueCode.too_big,
  //         maximum: 2,
  //         type: "number",
  //         inclusive: true,
  //       });
  //     }
  //   });

  //   const res = val.safeParse(111);

  //   expect(res.success).toBeFalsy();

  //   if (res.success === false) {
  //     expect(res.error.errors[0].message).toBe(
  //       "数値は2以下である必要があります",
  //     );
  //   }
  // });

  // it("The too big number less than default error message in Japanese", async () => {
  //   const { t } = await getTranslator("ja");
  //   setI18nZodDefaultErrorMsg(t);

  //   const val = z.number().superRefine((val, ctx) => {
  //     if (val > 2) {
  //       ctx.addIssue({
  //         code: z.ZodIssueCode.too_big,
  //         maximum: 2,
  //         type: "number",
  //         inclusive: false,
  //       });
  //     }
  //   });

  //   const res = val.safeParse(111);

  //   expect(res.success).toBeFalsy();

  //   if (res.success === false) {
  //     expect(res.error.errors[0].message).toBe(
  //       "数値は2未満である必要があります",
  //     );
  //   }
  // });

  // it("The too big bigint exactly default error message in English", () => {
  //   const val = z.bigint().superRefine((val, ctx) => {
  //     if (val.toString() != "2") {
  //       ctx.addIssue({
  //         code: z.ZodIssueCode.too_big,
  //         type: "bigint",
  //         maximum: 2,
  //         exact: true,
  //         inclusive: false,
  //       });
  //     }
  //   });

  //   const res = val.safeParse(BigInt("1"));

  //   expect(res.success).toBeFalsy();

  //   if (res.success === false) {
  //     expect(res.error.errors[0].message).toBe("BigInt must be exactly 2");
  //   }
  // });

  // it("The too big number at most default error message in English", () => {
  //   const val = z.bigint().superRefine((val, ctx) => {
  //     if (val.toString() != "2") {
  //       ctx.addIssue({
  //         code: z.ZodIssueCode.too_big,
  //         maximum: 2,
  //         type: "bigint",
  //         inclusive: true,
  //       });
  //     }
  //   });

  //   const res = val.safeParse(BigInt("1"));

  //   expect(res.success).toBeFalsy();

  //   if (res.success === false) {
  //     expect(res.error.errors[0].message).toBe(
  //       "BigInt must be less than or equal to 2",
  //     );
  //   }
  // });

  // it("The too big number less than default error message in English", () => {
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

  // it("The too big bigint exactly default error message in Japanese", async () => {
  //   const { t } = await getTranslator("ja");
  //   setI18nZodDefaultErrorMsg(t);

  //   const val = z.bigint().superRefine((val, ctx) => {
  //     if (val.toString() != "2") {
  //       ctx.addIssue({
  //         code: z.ZodIssueCode.too_big,
  //         type: "bigint",
  //         maximum: 2,
  //         exact: true,
  //         inclusive: false,
  //       });
  //     }
  //   });

  //   const res = val.safeParse(BigInt("1"));

  //   expect(res.success).toBeFalsy();

  //   if (res.success === false) {
  //     expect(res.error.errors[0].message).toBe("数値は2である必要があります");
  //   }
  // });

  // it("The too big bigint at most default error message in Japanese", async () => {
  //   const { t } = await getTranslator("ja");
  //   setI18nZodDefaultErrorMsg(t);

  //   const val = z.bigint().superRefine((val, ctx) => {
  //     if (val.toString() != "2") {
  //       ctx.addIssue({
  //         code: z.ZodIssueCode.too_big,
  //         maximum: 2,
  //         type: "bigint",
  //         inclusive: true,
  //       });
  //     }
  //   });

  //   const res = val.safeParse(BigInt("1"));

  //   expect(res.success).toBeFalsy();

  //   if (res.success === false) {
  //     expect(res.error.errors[0].message).toBe(
  //       "数値は2以下である必要があります",
  //     );
  //   }
  // });

  // it("The too big bigint less than default error message in Japanese", async () => {
  //   const { t } = await getTranslator("ja");
  //   setI18nZodDefaultErrorMsg(t);

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
  //     expect(res.error.errors[0].message).toBe("数値は2である必要があります");
  //   }
  // });

  // it("The too big date at most default error message in English", () => {
  //   const val = z.date().max(new Date("2013-11-20"));

  //   const res = val.safeParse(new Date("2023-03-17"));

  //   expect(res.success).toBeFalsy();

  //   if (res.success === false) {
  //     expect(res.error.errors[0].message).toBe(
  //       "Date must be less than or equal to Nov 20, 2013, 09:00:00",
  //     );
  //   }
  // });

  // it("The too big date at most default error message in Japanese", async () => {
  //   const { t } = await getTranslator("ja");
  //   setI18nZodDefaultErrorMsg(t);

  //   const val = z.date().max(new Date("2013-11-20"));

  //   const res = val.safeParse(new Date("2023-03-17"));

  //   expect(res.success).toBeFalsy();

  //   if (res.success === false) {
  //     expect(res.error.errors[0].message).toBe(
  //       "日付は2013年11月20日 9:00:00以前である必要があります",
  //     );
  //   }
  // });

  // it("The too big date less than default error message in English", () => {
  //   const val = z.date().superRefine((_, ctx) => {
  //     ctx.addIssue({
  //       code: z.ZodIssueCode.too_big,
  //       maximum: new Date("2013-11-20").getTime(),
  //       type: "date",
  //       inclusive: false,
  //     });
  //   });

  //   const res = val.safeParse(new Date("2023-03-17"));

  //   expect(res.success).toBeFalsy();

  //   if (res.success === false) {
  //     expect(res.error.errors[0].message).toBe(
  //       "Date must be less than Nov 20, 2013, 09:00:00",
  //     );
  //   }
  // });

  // it("The too big date less than default error message in Japanese", async () => {
  //   const { t } = await getTranslator("ja");
  //   setI18nZodDefaultErrorMsg(t);

  //   const val = z.date().superRefine((_, ctx) => {
  //     ctx.addIssue({
  //       code: z.ZodIssueCode.too_big,
  //       maximum: new Date("2013-11-20").getTime(),
  //       type: "date",
  //       inclusive: false,
  //     });
  //   });

  //   const res = val.safeParse(new Date("2023-03-17"));

  //   expect(res.success).toBeFalsy();

  //   if (res.success === false) {
  //     expect(res.error.errors[0].message).toBe(
  //       "日付は2013年11月20日 9:00:00よりも前である必要があります",
  //     );
  //   }
  // });

  // it("The too big date exactly default error message in English", () => {
  //   const val = z.date().superRefine((_, ctx) => {
  //     ctx.addIssue({
  //       code: z.ZodIssueCode.too_big,
  //       maximum: new Date("2013-11-20").getTime(),
  //       exact: true,
  //       type: "date",
  //       inclusive: false,
  //     });
  //   });

  //   const res = val.safeParse(new Date("2023-03-17"));

  //   expect(res.success).toBeFalsy();

  //   if (res.success === false) {
  //     expect(res.error.errors[0].message).toBe(
  //       "Date must be exactly Nov 20, 2013, 09:00:00",
  //     );
  //   }
  // });

  // it("The too big date exactly default error message in Japanese", async () => {
  //   const { t } = await getTranslator("ja");
  //   setI18nZodDefaultErrorMsg(t);

  //   const val = z.date().superRefine((_, ctx) => {
  //     ctx.addIssue({
  //       code: z.ZodIssueCode.too_big,
  //       maximum: new Date("2013-11-20").getTime(),
  //       exact: true,
  //       type: "date",
  //       inclusive: false,
  //     });
  //   });

  //   const res = val.safeParse(new Date("2023-03-17"));

  //   expect(res.success).toBeFalsy();

  //   if (res.success === false) {
  //     expect(res.error.errors[0].message).toBe(
  //       "日付は2013年11月20日 9:00:00である必要があります",
  //     );
  //   }
  // });
});
