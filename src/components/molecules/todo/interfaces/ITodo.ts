import { ITypographyProps } from "../../../atoms/typography/interfaces/ITypography";

export interface ISTodoTypography extends ITypographyProps {
    isActive: boolean;
}

export interface ITodo {
    label: string,
    isActive: boolean,
    id: number
}
export interface ITodoProps extends ITodo{
    onDelete: (id: number) => (e: React.MouseEvent<HTMLElement>) => void;
    onChangeActive: (id: number) => (e: React.MouseEvent<HTMLElement>) => void;
}

