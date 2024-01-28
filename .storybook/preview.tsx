import React from "react";
import "../src/app/globals.css";
import { useDarkMode } from "storybook-dark-mode";

const Theme = (Story) => {
  const dark = useDarkMode();

  return (
    <div data-color-mode={dark ? "dark" : "light"}>
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
  darkMode: {
    current: "dark",
  },
  decorators: [Theme],
};

export default preview;
