import React, { ReactElement } from "react";
import { STypography } from "../typography/styled/STypography";
import { ISwitchProps } from "./interfaces/ISwitch";
import { SSwitchInput, SSwitchLabel, SSwitch } from "./styled/SSwitch";

const Switch: React.FC<ISwitchProps> = ({ text, checked, onChange }): ReactElement => {
  return <>
    <STypography fontSize={18}>{text}</STypography>
    <SSwitchLabel>
      <SSwitchInput checked={checked} type="checkbox" onChange={onChange} />
      <SSwitch />
    </SSwitchLabel>
  </>;
};

export default Switch;
