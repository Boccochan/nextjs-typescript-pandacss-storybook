export * from "./validation";

export const extractIntegerFromString = (inputString: string) => {
  const regexPattern = /\d+/g;
  const numbersArray = inputString.match(regexPattern);

  return numbersArray ? numbersArray.join("") : "";
};
