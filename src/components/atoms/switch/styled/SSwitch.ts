import styled from "styled-components";
import { ISSwitch } from '../interfaces/ISwitch'

export const SSwitchLabel = styled.label`
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;

`;

export const SSwitch = styled.div`
  position: relative;
  width: 60px;
  height: 24px;
  background: #b3b3b3;
  border-radius: 32px;
  padding: 4px;
  transition: 300ms all;
  &:hover {
    background: ${(props: ISSwitch) => props.theme.palette.action.hover};
  } 

  &:before {
    transition: 300ms all;
    content: "";
    position: absolute;
    width: 24px;
    height: 24px;
    border-radius: 35px;
    top: 50%;
    left: 4px;
    background: white;
    transform: translate(0, -50%);
  }
`;

export const SSwitchInput = styled.input`
  opacity: 0;
  position: absolute;

  &:checked + ${SSwitch} {
    background: green;

    &:before {
      transform: translate(32px, -50%);
    }
  }
`;