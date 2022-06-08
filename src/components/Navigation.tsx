import { styled } from "@stitches/react";
import { darkTheme, lightTheme, theme } from "../stitches.config";
import { ThemeContext } from "../utils/ThemeContext";
import { useTheme } from "../utils/useTheme";
import { ThemeSwitch } from "./ThemeSwitch";

const StyledNavigation = styled("nav", {
  padding: "1rem",
  boxShadow: "0 2px 5px 0 rgba(0, 0, 0, 0.8)",
  display: "grid",
  gridTemplateColumns: "1fr max-content",
  transition: theme.transitions.$theme.value,
  alignItems: "center",
  "&.dark": {
    background: darkTheme.colors.$bgColor.value,
  },
  "&.light": {
    background: lightTheme.colors.$bgColor.value,
  },
  h2: {
    color: theme.colors.$titleColor.value,
    fontWeight: 400,
    margin: 0,
  },
});

export function Navigation() {
  const [theme, setTheme] = useTheme();

  function toggleTheme() {
    setTheme(theme === "light" ? "dark" : "light");
  }

  return (
    <ThemeContext.Provider value={theme}>
      <StyledNavigation className={theme}>
        <h2>Music player</h2>
        <ThemeSwitch onClick={toggleTheme} />
      </StyledNavigation>
    </ThemeContext.Provider>
  );
}
