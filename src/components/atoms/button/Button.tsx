import React, { ReactElement } from "react";
import { IButtonProps } from "./interfaces/IButton";
import { SButton } from "./styled/SButton";
import { SButtonTypography } from "./styled/SButtonTypography";

const Button: React.FC<IButtonProps> = ({ text, ...props }): ReactElement => {
  return (
    <SButton {...props}>
      <SButtonTypography >
        {text}
      </SButtonTypography>
    </SButton>
  );
};

export default React.memo(Button);
