import { render } from "@testing-library/react";
import React from "react";

import { Spinner } from "./Spinner";

describe("Snapshot spinner", () => {
  it("Size=sm", async () => {
    const spinner = render(<Spinner size="sm" />);

    expect(spinner).toMatchSnapshot();
  });

  it("Size=md", async () => {
    const spinner = render(<Spinner size="md" />);

    expect(spinner).toMatchSnapshot();
  });

  it("Size=lg", async () => {
    const spinner = render(<Spinner size="lg" />);

    expect(spinner).toMatchSnapshot();
  });

  it("Size=xl", async () => {
    const spinner = render(<Spinner size="xl" />);

    expect(spinner).toMatchSnapshot();
  });
});
