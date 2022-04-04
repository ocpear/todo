import styled from "styled-components";
import Typography from "../../../atoms/typography/Typography";
import { ISTodoTypography } from "../interfaces/ITodo";


export const STodoWrapper = styled.div`
  margin-bottom: 10px;
  padding: 4px;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 36px;
  background: ${props => props.theme.palette.background.paper};
  &:hover {
    background: ${(props) => props.theme.palette.action.hover};
  }
`;

export const STodoTypography = styled(Typography) <ISTodoTypography>`
  text-decoration: ${props => !props.isActive && 'line-through'};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-weight: bold;
  flex: 1;
`;


export const STodoDotTypography = styled(Typography)`   
  width: 24px;
  margin-top: 18px;
  font-size: 50px;
`;

