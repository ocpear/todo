import React, { useState, ReactElement } from "react";
import { THEME_MODE } from "../constants";
import { ThemeProvider as StyledThemeProvider } from "styled-components";
import { themeByName } from "../configs/theme";
import { ThemeContext, useTheme } from "./hooks/useTheme";

export const ThemeProvider: React.FC = ({ children }): ReactElement => {
  const [theme, setTheme] = useState<string>(THEME_MODE.LIGHT);
  const onChangeTheme = () => {
    setTheme(theme === THEME_MODE.LIGHT ? THEME_MODE.DARK : THEME_MODE.LIGHT);
  };
  return <ThemeContext.Provider value={{ theme, onChangeTheme }} children={children} />;
};

export const SThemeWrapper: React.FC = ({ children }): ReactElement => {
  const { theme } = useTheme();
  return <StyledThemeProvider theme={themeByName[theme]}>{children}</StyledThemeProvider>
}
