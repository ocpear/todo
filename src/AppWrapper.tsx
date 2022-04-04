import { ReactElement } from "react";
import { SThemeWrapper, ThemeProvider } from "./theme/Theme";


export const AppWrapper: React.FC = ({ children }): ReactElement => {
  return <ThemeProvider>
    <SThemeWrapper>
      {children}
    </SThemeWrapper>
  </ThemeProvider>
}

export default AppWrapper;
