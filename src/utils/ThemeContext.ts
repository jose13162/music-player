import { createContext } from "react";
import { Theme } from "./useTheme";

export const ThemeContext = createContext<Theme>(
  (localStorage.getItem("theme") as Theme) || "light"
);
