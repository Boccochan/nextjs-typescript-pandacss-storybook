import { render } from "@testing-library/react";
import React from "react";
import { MdEmail } from "react-icons/md";

import { IconButton } from "./IconButton";

describe("Snapshot IconButton", () => {
  it("With Md icon, size=sm", async () => {
    const button = render(
      <IconButton size="sm" Icon={MdEmail} aria-label="Send email" />,
    );

    expect(button).toMatchSnapshot();
  });

  it("With Md icon, size=md", async () => {
    const button = render(
      <IconButton size="md" Icon={MdEmail} aria-label="Send email" />,
    );

    expect(button).toMatchSnapshot();
  });

  it("With Md icon, size=lg", async () => {
    const button = render(
      <IconButton size="lg" Icon={MdEmail} aria-label="Send email" />,
    );

    expect(button).toMatchSnapshot();
  });

  it("With Md icon, size=xl", async () => {
    const button = render(
      <IconButton size="xl" Icon={MdEmail} aria-label="Send email" />,
    );

    expect(button).toMatchSnapshot();
  });
});
