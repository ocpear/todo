import React from "react";
import { ITheme, TColor } from "../../../../theme/interfaces/ITheme";

export interface ISTypography extends React.ParamHTMLAttributes<HTMLParagraphElement> {
    theme: ITheme;
    fontSize: number;
    color?: TColor;
}

export interface ITypographyProps extends React.ParamHTMLAttributes<HTMLParagraphElement> {
    text?: string;
    fontSize: number;
    color?: TColor;
}