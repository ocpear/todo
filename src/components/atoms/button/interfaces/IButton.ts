import { ButtonHTMLAttributes } from "react";
import { ITheme, TColor } from "../../../../theme/interfaces/ITheme";

export interface ISButton extends ButtonHTMLAttributes<HTMLButtonElement> {
    theme: ITheme;
    color?: TColor;
}

export interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    text: string;
    color?: TColor;
}