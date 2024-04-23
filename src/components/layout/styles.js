import styled from "styled-components";

export const Container = styled.div`
  padding: 1rem;
  width: calc(100% - 250px);
  margin-left: 250px;
  // display: flex;
  min-height: 100vh;
  height: auto;
  // align-items: center;
  // justify-content: center;
`;

export const TopHeader = styled.div`
  padding-bottom: 1rem;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  p{
    font-size: 1.5rem;
    font-weight: 500;
  }
`;
