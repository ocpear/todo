import React, { ReactElement } from "react";
import { ITypographyProps } from "./interfaces/ITypography";
import { STypography } from "./styled/STypography";

const Typography: React.FC<ITypographyProps> = ({ text, ...props }): ReactElement => {
  return <STypography {...props}>{text}</STypography>;
};

export default Typography;
