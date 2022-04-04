import styled from "styled-components";
import { ITheme } from "../../../../theme/interfaces/ITheme";
import Input from "../../../atoms/input/Input";

export const STodoInput = styled(Input)`
  border-radius: 8px;
  height: 48px;
  padding: 0 8px;
  font-size: 18px;
  border: 1px solid ${({ theme }: { theme: ITheme }) => theme.palette.text.primary};
  background: ${({ theme }: { theme: ITheme }) => theme.palette.background.paper};
  margin: 16px 0;
  color: ${({ theme }: { theme: ITheme }) => theme.palette.text.primary};
`;
