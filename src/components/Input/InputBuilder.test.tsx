import React from "react";

import { render } from "@/testlib";

import { InputBuilder } from "./InputBuilder";

describe("Snapshot InputBuilder", () => {
  it("With default", async () => {
    const inputBuilder = render(<InputBuilder />);

    expect(inputBuilder).toMatchSnapshot();
  });
});
