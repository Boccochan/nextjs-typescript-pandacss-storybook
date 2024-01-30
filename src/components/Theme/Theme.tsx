"use client";
import React from "react";

export type ThemeProps = {
  children: React.ReactNode;
};

export const Theme = (props: ThemeProps) => {
  const [isDarkMode, setIsDarkMode] = React.useState<boolean | undefined>(
    undefined,
  );

  React.useEffect(() => {
    const mediaQueryList = window.matchMedia("(prefers-color-scheme: dark)");

    // This is the first time to render
    if (isDarkMode === undefined) setIsDarkMode(mediaQueryList.matches);

    const listener = (e: MediaQueryListEvent) => setIsDarkMode(e.matches);

    mediaQueryList.addEventListener("change", listener);

    () => mediaQueryList.removeEventListener("change", listener);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (typeof window === "undefined" || isDarkMode === undefined) {
    // TODO: Show loader or something
    return <div></div>;
  }

  return (
    <div data-color-mode={isDarkMode ? "dark" : "light"}>{props.children}</div>
  );
};

// export default Theme;
