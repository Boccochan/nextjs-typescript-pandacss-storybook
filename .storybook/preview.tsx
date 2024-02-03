import React from "react";
import "../src/app/globals.css";
import { css } from "../styled-system/css";
import { useDarkMode } from "storybook-dark-mode";

const Pandacss = (Story) => {
  return (
    <div className={css()}>
      <Story />
    </div>
  );
};

const Theme = (Story) => {
  const dark = useDarkMode();

  return (
    <div data-theme={dark ? "dark" : "light"}>
      <Story />
    </div>
  );
};

const preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [Theme, Pandacss],
};

export default preview;
