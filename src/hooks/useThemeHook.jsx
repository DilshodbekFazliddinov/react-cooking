import { useContext } from "react";
import { ThemeContent } from "../context/useThemeContext";

export const useTheme = () => {
  const context = useContext(ThemeContent);
  if (!context) {
    throw new Error("Must be context apni ichida bo'lishi kerak");
  }
  return context;
};
