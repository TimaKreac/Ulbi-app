import { createContext } from "react";

export enum Theme {
  LIGHT = "light",
  DARK = "dark",
}

interface ThemeContextProps {
  theme: Theme;
  toggleTheme: () => void;
  setTheme: (theme: Theme) => void;
}

export const ThemeContext = createContext<ThemeContextProps>({
  theme: Theme.LIGHT,
  toggleTheme: () => {},
  setTheme: () => {},
});

export const LOCAL_STORAGE_THEME_KEY = "theme";
