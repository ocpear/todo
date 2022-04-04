import styled from "styled-components";

export const STodoPageWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  background: ${props => props.theme.palette.background.default};

  @media (min-height: 600px) {
    align-items: center;
  }
`;

export const STodoPage = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding : 0 16px;
  @media (min-width: 768px) {
    margin: 0;
    width: 768px;
  }
`;