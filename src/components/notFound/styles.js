import styled from "styled-components";

export const Container = styled.div`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  height: auto;
  gap: 32px;
  align-items: center;
  justify-content: center;
  text-align: center;

  div {
    display: flex;
    flex-direction: column;
    gap: 24px;
  }
`;

export const Title = styled.h1`
  font-size: 4rem;
  font-weight: 600;
`;


export const Desc = styled.p`
  font-size: 1.5rem;
`;
