import styled from "styled-components";
import { ISSpacing } from "../interfaces/ISpacing";

export const SSpacing = styled.div<ISSpacing>`
  width: ${props => isNaN(Number(props.size)) ? props.size : (props.size + 'px')};
`;
