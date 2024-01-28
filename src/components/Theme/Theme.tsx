"use client";
import React from "react";

type ThemeProvider = {
  children: React.ReactNode;
};

export const Theme = (props: ThemeProvider) => {
  const [isDarkMode, setIsDarkMode] = React.useState(
    window.matchMedia("(prefers-color-scheme: dark)").matches,
  );

  React.useEffect(() => {
    const mediaQueryList = window.matchMedia("(prefers-color-scheme: dark)");
    const listener = (e: MediaQueryListEvent) => setIsDarkMode(e.matches);

    mediaQueryList.addEventListener("change", listener);

    () => mediaQueryList.removeEventListener("change", listener);
  }, []);

  return (
    <div data-color-mode={isDarkMode ? "dark" : "light"}>{props.children}</div>
  );
};
