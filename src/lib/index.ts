export * from "./validation";

// TODO: 単体テスト
export const extractIntegerFromString = (inputString: string) => {
  const regexPattern = /\d+/g;
  const numbersArray = inputString.match(regexPattern);

  return numbersArray ? numbersArray.join("") : "";
};
