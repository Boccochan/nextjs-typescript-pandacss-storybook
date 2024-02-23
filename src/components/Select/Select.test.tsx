import React from "react";

import { render } from "@/testlib";

import { Select } from "./Select";

describe("Snapshot Select", () => {
  it("With size=xs, options=[]", async () => {
    const select = render(<Select size="xs" options={[]} />);

    expect(select).toMatchSnapshot();
  });

  it("With size=sm, options=[]", async () => {
    const select = render(<Select size="sm" options={[]} />);

    expect(select).toMatchSnapshot();
  });

  it("With size=md, options=[]", async () => {
    const select = render(<Select size="md" options={[]} />);

    expect(select).toMatchSnapshot();
  });

  it("With size=lg, options=[]", async () => {
    const select = render(<Select size="lg" options={[]} />);

    expect(select).toMatchSnapshot();
  });

  it("With size=xl, options=[]", async () => {
    const select = render(<Select size="xl" options={[]} />);

    expect(select).toMatchSnapshot();
  });

  it("With options=[]", async () => {
    const select = render(<Select options={[]} />);

    expect(select).toMatchSnapshot();
  });

  it("With options=['Apple', 'Microsoft']", async () => {
    const select = render(
      <Select
        options={[
          { id: "apple", value: "Apple" },
          { id: "microsoft", value: "Microsoft" },
        ]}
      />,
    );

    expect(select).toMatchSnapshot();
  });

  it("With options=['Apple', 'Microsoft'] disabled", async () => {
    const select = render(
      <Select
        options={[
          { id: "apple", value: "Apple" },
          { id: "microsoft", value: "Microsoft" },
        ]}
        disabled
      />,
    );

    expect(select).toMatchSnapshot();
  });

  it("With loading", async () => {
    const select = render(<Select options={[]} loading />);

    expect(select).toMatchSnapshot();
  });

  it("With options=['Apple', 'Microsoft'] selected Microsoft", async () => {
    const select = render(
      <Select
        options={[
          { id: "apple", value: "Apple" },
          { id: "microsoft", value: "Microsoft", isSelected: true },
        ]}
      />,
    );

    expect(select).toMatchSnapshot();
  });

  it("With options=['Select', 'Apple', 'Microsoft'] select option", async () => {
    const select = render(
      <Select
        options={[
          { id: "select", value: "Select", hidden: true },
          { id: "apple", value: "Apple" },
          { id: "microsoft", value: "Microsoft", isSelected: true },
        ]}
      />,
    );

    expect(select).toMatchSnapshot();
  });

  it("With width='xs' options=['Select', 'Apple', 'Microsoft'] ", async () => {
    const select = render(
      <Select
        width="xs"
        options={[
          { id: "select", value: "Select", hidden: true },
          { id: "apple", value: "Apple" },
          { id: "microsoft", value: "Microsoft" },
        ]}
      />,
    );

    expect(select).toMatchSnapshot();
  });

  it("With width='sm' options=['Select', 'Apple', 'Microsoft'] ", async () => {
    const select = render(
      <Select
        width="sm"
        options={[
          { id: "select", value: "Select", hidden: true },
          { id: "apple", value: "Apple" },
          { id: "microsoft", value: "Microsoft" },
        ]}
      />,
    );

    expect(select).toMatchSnapshot();
  });

  it("With width='md' options=['Select', 'Apple', 'Microsoft'] ", async () => {
    const select = render(
      <Select
        width="md"
        options={[
          { id: "select", value: "Select", hidden: true },
          { id: "apple", value: "Apple" },
          { id: "microsoft", value: "Microsoft" },
        ]}
      />,
    );

    expect(select).toMatchSnapshot();
  });

  it("With width='lg' options=['Select', 'Apple', 'Microsoft'] ", async () => {
    const select = render(
      <Select
        width="lg"
        options={[
          { id: "select", value: "Select", hidden: true },
          { id: "apple", value: "Apple" },
          { id: "microsoft", value: "Microsoft" },
        ]}
      />,
    );

    expect(select).toMatchSnapshot();
  });

  it("With width='xl' options=['Select', 'Apple', 'Microsoft'] ", async () => {
    const select = render(
      <Select
        width="xl"
        options={[
          { id: "select", value: "Select", hidden: true },
          { id: "apple", value: "Apple" },
          { id: "microsoft", value: "Microsoft" },
        ]}
      />,
    );

    expect(select).toMatchSnapshot();
  });

  it("With width='auto' options=['Select', 'Apple', 'Microsoft'] ", async () => {
    const select = render(
      <Select
        width="auto"
        options={[
          { id: "select", value: "Select", hidden: true },
          { id: "apple", value: "Apple" },
          { id: "microsoft", value: "Microsoft" },
        ]}
      />,
    );

    expect(select).toMatchSnapshot();
  });

  it("With width='full' options=['Select', 'Apple', 'Microsoft'] ", async () => {
    const select = render(
      <Select
        width="full"
        options={[
          { id: "select", value: "Select", hidden: true },
          { id: "apple", value: "Apple" },
          { id: "microsoft", value: "Microsoft" },
        ]}
      />,
    );

    expect(select).toMatchSnapshot();
  });
});
