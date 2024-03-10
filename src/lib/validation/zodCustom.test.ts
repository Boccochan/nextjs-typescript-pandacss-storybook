// import { getTranslations } from "next-intl/server";
import { z } from "zod";

describe("zodCustom", () => {
  it("refine default error message in english", () => {
    const myString = z.string().refine((val) => val.length <= 2);
    const res = myString.safeParse("111");

    expect(res.success).toBeFalsy();

    if (res.success === false) {
      expect(res.error.errors[0].message).toBe("Invalid input");
    }
  });
});
