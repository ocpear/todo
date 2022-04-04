import styled from "styled-components";
import Button from "../../../atoms/button/Button";

export const STodoGroupButtonWrapper = styled.div`
  padding: 8px 0;
`;

export const STodoGroupViewButtonWrapper = styled.div`
  display: flex;
  margin-left: -8px;
  margin-right: -8px;
`;

export const STodoGroupButton = styled(Button)`
  height: 48px;
  width: 33.33%;
  font-size: 16px;
  margin: 8px;
`;
export const SToggleAllActionButton = styled(STodoGroupButton)`
  width: 100%;
`;
