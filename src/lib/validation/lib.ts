import type { Request } from "./types";

export const createDateMessage = (
  request: Request,
  key: string,
  orderDate: Date,
) => {
  return {
    message: request.t(
      key,
      { orderDate },
      {
        dateTime: {
          short: {
            day: "numeric",
            month: "short",
            year: "numeric",
            hour: "numeric",
            minute: "numeric",
            second: "numeric",
            hour12: false,
          },
        },
      },
    ),
  };
};
