import styled from "styled-components";
import { ISButton } from "../interfaces/IButton";

export const SButton = styled.button<ISButton>`
  min-width: 32px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  cursor: pointer;
  color: ${(props: ISButton) =>
    props.color ? props.theme.palette[props.color].contrastText : props.theme.palette.text.primary};
  background: ${(props: ISButton) =>
    props.color ? props.theme.palette[props.color].main : props.theme.palette.background.default};
  border: 1px solid ${(props: ISButton) =>
    props.color ? props.theme.palette[props.color].main : props.theme.palette.text.primary};
  &:hover {
      background: ${(props: ISButton) =>
    props.color ? props.theme.palette[props.color].light : props.theme.palette.action.hover};
  }
`;
