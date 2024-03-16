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

  it("The string startsWith default error message in English", () => {
    const myFunction = z.string().startsWith("hoge");

    const res = myFunction.safeParse("test");

    expect(res.success).toBeFalsy();

    if (res.success === false) {
      expect(res.error.errors[0].message).toBe(
        "Invalid input: must start with hoge",
      );
    }
  });

  it("The string startsWith default error message in Japanese", async () => {
    const t = await getTranslator("ja");
    setI18nZodDefaultErrorMsg(t);

    const myFunction = z.string().startsWith("hoge");

    const res = myFunction.safeParse("test");

    expect(res.success).toBeFalsy();

    if (res.success === false) {
      expect(res.error.errors[0].message).toBe(
        "不正な値です。hogeで開始して下さい",
      );
    }
  });

  it("The string endsWith default error message in English", () => {
    const myFunction = z.string().endsWith("hoge");

    const res = myFunction.safeParse("test");

    expect(res.success).toBeFalsy();

    if (res.success === false) {
      expect(res.error.errors[0].message).toBe(
        "Invalid input: must end with hoge",
      );
    }
  });

  it("The string endsWith default error message in Japanese", async () => {
    const t = await getTranslator("ja");
    setI18nZodDefaultErrorMsg(t);

    const myFunction = z.string().endsWith("hoge");

    const res = myFunction.safeParse("test");

    expect(res.success).toBeFalsy();

    if (res.success === false) {
      expect(res.error.errors[0].message).toBe(
        "不正な値です。hogeで終了して下さい",
      );
    }
  });

  it("The string email default error message in English", () => {
    const myFunction = z.string().email();

    const res = myFunction.safeParse("test");

    expect(res.success).toBeFalsy();

    if (res.success === false) {
      expect(res.error.errors[0].message).toBe("Invalid email");
    }
  });

  it("The string email default error message in Japanese", async () => {
    const t = await getTranslator("ja");
    setI18nZodDefaultErrorMsg(t);

    const myFunction = z.string().email();

    const res = myFunction.safeParse("test");

    expect(res.success).toBeFalsy();

    if (res.success === false) {
      expect(res.error.errors[0].message).toBe("不正なEメールアドレスです");
    }
  });

  it("The string url default error message in English", () => {
    const myFunction = z.string().url();

    const res = myFunction.safeParse("test");

    expect(res.success).toBeFalsy();

    if (res.success === false) {
      expect(res.error.errors[0].message).toBe("Invalid URL");
    }
  });

  it("The string url default error message in Japanese", async () => {
    const t = await getTranslator("ja");
    setI18nZodDefaultErrorMsg(t);

    const myFunction = z.string().url();

    const res = myFunction.safeParse("test");

    expect(res.success).toBeFalsy();

    if (res.success === false) {
      expect(res.error.errors[0].message).toBe("不正なURLです");
    }
  });

  it("The string emoji default error message in English", () => {
    const myFunction = z.string().emoji();

    const res = myFunction.safeParse("hoge");

    expect(res.success).toBeFalsy();

    if (res.success === false) {
      expect(res.error.errors[0].message).toBe("Invalid emoji");
    }
  });

  it("The string emoji default error message in Japanese", async () => {
    const t = await getTranslator("ja");
    setI18nZodDefaultErrorMsg(t);

    const myFunction = z.string().emoji();

    const res = myFunction.safeParse("hoge");

    expect(res.success).toBeFalsy();

    if (res.success === false) {
      expect(res.error.errors[0].message).toBe("不正な絵文字です");
    }
  });

  it("The string uuid default error message in English", () => {
    const myFunction = z.string().uuid();

    const res = myFunction.safeParse("hoge");

    expect(res.success).toBeFalsy();

    if (res.success === false) {
      expect(res.error.errors[0].message).toBe("Invalid UUID");
    }
  });

  it("The string uuid default error message in Japanese", async () => {
    const t = await getTranslator("ja");
    setI18nZodDefaultErrorMsg(t);

    const myFunction = z.string().uuid();

    const res = myFunction.safeParse("hoge");

    expect(res.success).toBeFalsy();

    if (res.success === false) {
      expect(res.error.errors[0].message).toBe("不正なUUIDです");
    }
  });

  it("The string cuid default error message in English", () => {
    const myFunction = z.string().cuid();

    const res = myFunction.safeParse("hoge");

    expect(res.success).toBeFalsy();

    if (res.success === false) {
      expect(res.error.errors[0].message).toBe("Invalid CUID");
    }
  });

  it("The string cuid default error message in Japanese", async () => {
    const t = await getTranslator("ja");
    setI18nZodDefaultErrorMsg(t);

    const myFunction = z.string().cuid();

    const res = myFunction.safeParse("hoge");

    expect(res.success).toBeFalsy();

    if (res.success === false) {
      expect(res.error.errors[0].message).toBe("不正なCUIDです");
    }
  });

  it("The string cuid2 default error message in English", () => {
    const myFunction = z.string().cuid2();

    const res = myFunction.safeParse("11");

    expect(res.success).toBeFalsy();

    if (res.success === false) {
      expect(res.error.errors[0].message).toBe("Invalid CUID2");
    }
  });

  it("The string cuid2 default error message in Japanese", async () => {
    const t = await getTranslator("ja");
    setI18nZodDefaultErrorMsg(t);

    const myFunction = z.string().cuid2();

    const res = myFunction.safeParse("11");

    expect(res.success).toBeFalsy();

    if (res.success === false) {
      expect(res.error.errors[0].message).toBe("不正なCUID2です");
    }
  });

  it("The string cuid2 default error message in English", () => {
    const myFunction = z.string().ulid();

    const res = myFunction.safeParse("11");

    expect(res.success).toBeFalsy();

    if (res.success === false) {
      expect(res.error.errors[0].message).toBe("Invalid ULID");
    }
  });

  it("The string cuid2 default error message in Japanese", async () => {
    const t = await getTranslator("ja");
    setI18nZodDefaultErrorMsg(t);

    const myFunction = z.string().ulid();

    const res = myFunction.safeParse("11");

    expect(res.success).toBeFalsy();

    if (res.success === false) {
      expect(res.error.errors[0].message).toBe("不正なULIDです");
    }
  });
});
