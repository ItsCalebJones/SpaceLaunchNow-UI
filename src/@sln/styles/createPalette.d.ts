import React from "react";

declare module "@mui/material" {
  interface SLNThemeExtension {
    bannerShadow: React.CSSProperties["boxShadow"];
    borderStandard: React.CSSProperties["color"];
    defaultDarkBackground: React.CSSProperties["color"];
    defaultLightBackground: React.CSSProperties["color"];
    navText: React.CSSProperties["color"];
  }

  interface Theme {
    sln: SLNThemeExtension;
  }

  interface DeprecatedThemeOptions {
    sln?: Partial<SLNThemeExtension>;
  }
}
