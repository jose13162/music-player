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
    $bgColor: "#323840",
    $bgColorDarker: "#24292d",
    $bgColorDarkest: "#202529",
    $bgColorSecondary: "#404852",
    $bgColorSecondaryDarker: "#425054",
  },
});

export const lightTheme = createTheme({
  colors: {
    $bgColor: "#fff",
    $bgColorDarker: "#f0f8ff",
    $bgColorDarkest: "#d4e2e9",
    $bgColorSecondary: "#e9f5ff",
    $bgColorSecondaryDarker: "#e7f3fd",
  },
});
