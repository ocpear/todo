import React, { ReactElement } from "react";
import { ISpacingProps } from "./interfaces/ISpacing";
import { SSpacing, } from "./styled/SSpacing";

const Spacing: React.FC<ISpacingProps> = ({ size }): ReactElement => {
    return <SSpacing size={size} />;
};

export default Spacing;
