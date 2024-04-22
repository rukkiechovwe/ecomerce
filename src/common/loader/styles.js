import styled, { keyframes } from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 100vh;
  background-color: #fff;
  position: fixed;
  width: 100%;
  z-index: 100;
  top: 0;
  right: 0;
`;

const rotate = keyframes`  
  to {
      transform: rotate(360deg);
    }
`;

export const Loader = styled.div`
  display: flex;
  justify-content: center;
  height: 50px;
  animation: ${rotate} 3s linear infinite;
  transform-origin: bottom center;
`;

export const Text = styled.p`
  margin-top: 20px;
  color: #fff;
  text-align: center;
  margin-top: 70px;
`;

const grow = keyframes`
  50% {
      transform: scale(1);
    }
`;

export const Spin = styled.span`
  display: inline-block;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: hsl(163,53%,46%);
  transform: scale(0.2);
  margin: -5px;
  animation: ${grow} 1.5s linear infinite;
`;
export const Spin1 = styled(Spin)``;
export const Spin2 = styled(Spin)`
  background-color: hsl(163,53%,46%);
  animation-delay: 0.75s;
`;
