import styled from "styled-components";

export const STodoTitleContainer = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
  align-items: center;
  position: relative;
  @media (max-width: 767px) {
    display: flex;
    justify-content: space-between;
  }
  @media (min-width: 768px) {
    justify-content: center;
  }
`;


export const SThemeSwitchContainer = styled.div`
  display: flex;
  align-items: center;
  @media (min-width: 768px) {
    right: 0;
    position: absolute;
  }
`;
