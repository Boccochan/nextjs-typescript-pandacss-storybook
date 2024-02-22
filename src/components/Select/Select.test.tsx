import React from "react";

import { render } from "@/testlib";

import { Select } from "./Select";

describe("Snapshot Select", () => {
  it("With size=xs, options=[]", async () => {
    const select = render(<Select size="xs" options={[]} />);

    expect(select).toMatchSnapshot();
  });
});
