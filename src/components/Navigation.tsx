import { styled } from "@stitches/react";
import { useContext } from "react";
import { ThemeContext } from "../App";
import { darkTheme, lightTheme, theme } from "../stitches.config";
import { ThemeSwitch } from "./ThemeSwitch";

const StyledNavigation = styled("nav", {
  padding: "1rem",
  zIndex: 1,
  display: "grid",
  gridTemplateColumns: "1fr max-content",
  transition: theme.transitions.$theme.value,
  alignItems: "center",
  "&.dark": {
    boxShadow: "0 2px 5px 0 rgba(0, 0, 0, 0.6)",
    background: darkTheme.colors.$bgColorDarker.value,
  },
  "&.light": {
    boxShadow: "0 2px 5px 0 rgba(0, 0, 0, 0.3)",
    background: lightTheme.colors.$bgColorDarkest.value,
  },
  h2: {
    color: theme.colors.$titleColor.value,
    fontWeight: 600,
    margin: 0,
  },
});

export function Navigation() {
  const [theme] = useContext(ThemeContext);

  return (
    <StyledNavigation className={theme}>
      <h2>Music player</h2>
      <ThemeSwitch />
    </StyledNavigation>
  );
}
