import {
  Dispatch,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from "react";
import { ThemeContext } from "./ThemeContext";

export type Theme = "light" | "dark";

type Response = [Theme, Dispatch<SetStateAction<Theme>>];

export function useTheme(): Response {
  const currentTheme = useContext(ThemeContext);
  const [theme, setTheme] = useState<Theme>(currentTheme);

  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  return [theme, setTheme];
}
