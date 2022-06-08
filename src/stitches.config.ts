import { createStitches } from "@stitches/react";

export const { styled, globalCss, createTheme, theme } = createStitches({
  theme: {
    colors: {
      $textColor: "#777",
      $titleColor: "#2fa1ff",
      $fillColor: "#2fa1ff",
    },
    transitions: {
      $theme: "all 0.15s linear",
    },
  },
});

export const darkTheme = createTheme({
  colors: {
    $bgColor: "#24292d",
    $bgColorLighter: "#323840",
    $bgColorSecondary: "#404852",
    $bgColorSecondaryDarker: "#425054",
  },
});

export const lightTheme = createTheme({
  colors: {
    $bgColor: "#f0f8ff",
    $bgColorDarker: "#fff",
    $bgColorSecondary: "#e9f5ff",
    $bgColorSecondaryDarker: "#e7f3fd",
  },
});
