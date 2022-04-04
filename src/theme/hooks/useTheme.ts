import { createContext, useContext } from "react";
import { IThemeContext } from "../interfaces/ITheme";

export const ThemeContext = createContext<IThemeContext>({
    theme: "",
    onChangeTheme: () => { }
});

export const useTheme = () => {
    const c = useContext(ThemeContext);
    return c;
}
