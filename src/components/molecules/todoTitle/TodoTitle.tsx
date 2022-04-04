import React, { ReactElement } from "react";
import { THEME_MODE } from "../../../constants";
import { useTheme } from "../../../theme/hooks/useTheme";
import Spacing from "../../atoms/spacing/Spacing";
import Switch from "../../atoms/switch/Switch";
import Typography from "../../atoms/typography/Typography";
import { STodoTitleContainer, SThemeSwitchContainer } from "./styled/STodoTitle";

const TodoTitle = (): ReactElement => {
  const { onChangeTheme, theme } = useTheme();
  return (
    <STodoTitleContainer>
      <Typography text="Todo" fontSize={32} />

      <SThemeSwitchContainer>
        <Typography text="Use dark theme" fontSize={14} />
        <Spacing size={8} />
        <Switch onChange={onChangeTheme} checked={theme === THEME_MODE.DARK} />
      </SThemeSwitchContainer>
    </STodoTitleContainer>
  );
};

export default React.memo(TodoTitle);
