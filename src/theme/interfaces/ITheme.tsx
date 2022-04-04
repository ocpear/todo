export interface IThemeContext {
  theme: string,
  onChangeTheme: () => void,
}

export type TColor = "error" | "info" | "success"

export interface ITheme {
  palette: {
    primary: {
      main: string;
      light: string;
      dark: string;
      contrastText: string;
    },
    secondary: {
      main: string;
      light: string;
      dark: string;
      contrastText: string;
    },
    error: {
      main: string;
      light: string;
      dark: string;
      contrastText: string;
    },
    warning: {
      main: string;
      light: string;
      dark: string;
      contrastText: string;
    },
    info: {
      main: string;
      light: string;
      dark: string;
      contrastText: string;
    },
    success: {
      main: string;
      light: string;
      dark: string;
      contrastText: string;
    },
    text: {
      primary: string;
      secondary: string;
      disabled: string;
    },
    background: {
      paper: string;
      default: string;
    },
    action: {
      hover: string;
    },
  },
}
