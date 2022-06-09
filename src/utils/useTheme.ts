import { useEffect, useState } from "react";
import { StateTypings } from "./StateTypings";

export type Theme = "light" | "dark";

export function useTheme(): StateTypings<Theme> {
  const [theme, setTheme] = useState<Theme>(
    (localStorage.getItem("theme") as Theme) || "light"
  );

  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  return [theme, setTheme];
}
