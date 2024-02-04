import React from "react";
import "../src/app/globals.css";

import { useDarkMode } from "storybook-dark-mode";

const Theme = (Story) => {
  //Javascript can not change prefers-color-scheme. So,
  //we have to change dark by the different way. See
  //panda.config.ts osDark conditions.
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
  decorators: [Theme],
};

export default preview;
