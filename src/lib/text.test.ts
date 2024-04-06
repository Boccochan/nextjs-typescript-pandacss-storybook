import { extractIntegerFromString } from ".";

describe("extractIntegerFromString", () => {
  it("01234567", () => {
    const result = extractIntegerFromString("01234567");
    expect(result).toBe("01234567");
  });

  it("a01234567", () => {
    const result = extractIntegerFromString("a01234567");
    expect(result).toBe("01234567");
  });

  it("0123a4567", () => {
    const result = extractIntegerFromString("a01234567");
    expect(result).toBe("01234567");
  });

  it("01234567a", () => {
    const result = extractIntegerFromString("a01234567");
    expect(result).toBe("01234567");
  });

  it("   01234567    ", () => {
    const result = extractIntegerFromString("a01234567");
    expect(result).toBe("01234567");
  });

  it("   0123     4567    ", () => {
    const result = extractIntegerFromString("a01234567");
    expect(result).toBe("01234567");
  });

  it("abcdef", () => {
    const result = extractIntegerFromString("abcdef");
    expect(result).toBe("");
  });

  it("0123456789012345678901234567890123456789012345678901234567890123456789", () => {
    const result = extractIntegerFromString(
      "0123456789012345678901234567890123456789012345678901234567890123456789",
    );
    expect(result).toBe(
      "0123456789012345678901234567890123456789012345678901234567890123456789",
    );
  });
});
