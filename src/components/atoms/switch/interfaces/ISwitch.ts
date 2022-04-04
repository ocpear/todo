import React from "react";
import { ITheme } from "../../../../theme/interfaces/ITheme";

export interface ISSwitch extends React.InputHTMLAttributes<HTMLInputElement> {
    theme: ITheme;
}

export interface ISwitchProps extends React.InputHTMLAttributes<HTMLInputElement> {
    text?: string;
}