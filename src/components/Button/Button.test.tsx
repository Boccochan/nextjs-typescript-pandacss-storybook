import { render } from "@testing-library/react";
import React from "react";

import { Button } from "./Button";

describe("Snapshot button", () => {
  it("Primary", async () => {
    const button = render(<Button label="hello" />);

    expect(button).toMatchSnapshot();
  });

  it("Danger", async () => {
    const button = render(<Button label="hello" color="danger" />);

    expect(button).toMatchSnapshot();
  });

  it("Size=sm", async () => {
    const button = render(<Button label="hello" size="sm" />);

    expect(button).toMatchSnapshot();
  });

  it("Size=md", async () => {
    const button = render(<Button label="hello" size="md" />);

    expect(button).toMatchSnapshot();
  });

  it("Size=lg", async () => {
    const button = render(<Button label="hello" size="lg" />);

    expect(button).toMatchSnapshot();
  });

  it("Size=xl", async () => {
    const button = render(<Button label="hello" size="xl" />);

    expect(button).toMatchSnapshot();
  });

  it("Loading", async () => {
    const button = render(<Button label="hello" loading={true} />);

    expect(button).toMatchSnapshot();
  });

  it("Disabled", async () => {
    const button = render(<Button label="hello" disabled={true} />);

    expect(button).toMatchSnapshot();
  });
});
