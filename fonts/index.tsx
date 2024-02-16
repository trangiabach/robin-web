"use client";

import localFont from "next/font/local";

export const robinVariable = localFont({
  src: "../public/fonts/RobinVariable.woff2",
  display: "swap",
});

export const robinText = localFont({
  src: "../public/fonts/RobinText.woff2",
  display: "swap",
});

export const FontConfig = () => {
  return (
    <style jsx global>{`
      html,
      body {
        font-family: ${robinText.style.fontFamily};
      }

      .robin-variable {
        font-family: ${robinVariable.style.fontFamily};
      }

      .robin-text {
        font-family: ${robinText.style.fontFamily};
      }

      .robin-variable-cut {
        font-family: ${robinVariable.style.fontFamily};
        font-variation-settings: "cuts" 100, "move" 100;
        font-variant-ligatures: common-ligatures;
      }
    `}</style>
  );
};
