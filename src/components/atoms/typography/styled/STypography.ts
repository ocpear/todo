import styled from "styled-components";
import { ISTypography } from "../interfaces/ITypography";

export const STypography = styled.p<ISTypography>`
  font-size: ${(props: ISTypography) => props.fontSize}px;
  color: ${(props: ISTypography) =>
    props.color ? props.theme.palette[props.color].main : props.theme.palette.text.primary};
`;

