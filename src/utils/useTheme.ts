import { Dispatch, SetStateAction, useEffect, useState } from "react";

export type Theme = "light" | "dark";
export type Response<Type> = [Type, Dispatch<SetStateAction<Type>>];

export function useTheme(): Response<Theme> {
  const [theme, setTheme] = useState<Theme>(
    (localStorage.getItem("theme") as Theme) || "light"
  );

  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  return [theme, setTheme];
}
