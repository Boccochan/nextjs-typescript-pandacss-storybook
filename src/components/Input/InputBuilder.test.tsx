import React from "react";
import { MdAccountCircle } from "react-icons/md";

import { render } from "@/testlib";

import { InputBuilder } from "./InputBuilder";

describe("Snapshot InputBuilder", () => {
  it("With default", async () => {
    const inputBuilder = render(<InputBuilder />);

    expect(inputBuilder).toMatchSnapshot();
  });

  it("With size=xs, width=xs, placeholder='Input some word'", async () => {
    const inputBuilder = render(
      <InputBuilder size="xs" width="xs" placeholder="Input some world" />,
    );

    expect(inputBuilder).toMatchSnapshot();
  });

  it("With size=sm, width=sm, placeholder='Input some word'", async () => {
    const inputBuilder = render(
      <InputBuilder size="sm" width="sm" placeholder="Input some world" />,
    );

    expect(inputBuilder).toMatchSnapshot();
  });

  it("With size=md, width=md, placeholder='Input some word'", async () => {
    const inputBuilder = render(
      <InputBuilder size="md" width="md" placeholder="Input some world" />,
    );

    expect(inputBuilder).toMatchSnapshot();
  });

  it("With size=lg, width=lg, placeholder='Input some word'", async () => {
    const inputBuilder = render(
      <InputBuilder size="lg" width="lg" placeholder="Input some world" />,
    );

    expect(inputBuilder).toMatchSnapshot();
  });

  it("With size=xl, width=xl, placeholder='Input some word'", async () => {
    const inputBuilder = render(
      <InputBuilder size="xl" width="xl" placeholder="Input some world" />,
    );

    expect(inputBuilder).toMatchSnapshot();
  });

  it("With default with disabled", async () => {
    const inputBuilder = render(<InputBuilder disabled />);

    expect(inputBuilder).toMatchSnapshot();
  });

  it("With default with readOnly", async () => {
    const inputBuilder = render(<InputBuilder readOnly />);

    expect(inputBuilder).toMatchSnapshot();
  });

  it("With default with startIcon", async () => {
    const inputBuilder = render(<InputBuilder StartIcon={MdAccountCircle} />);

    expect(inputBuilder).toMatchSnapshot();
  });

  it("With default with endIcon", async () => {
    const inputBuilder = render(<InputBuilder EndIcon={MdAccountCircle} />);

    expect(inputBuilder).toMatchSnapshot();
  });
});
