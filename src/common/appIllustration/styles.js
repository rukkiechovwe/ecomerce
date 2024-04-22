import styled, { keyframes } from "styled-components";

const bounce = keyframes`
  from {
    transform: translateY(-10px);
  }

  to {
    transform: translateY(10px);
  }
`;

export const Imgwrapper = styled.div`
  animation: ${bounce} 2s alternate infinite;
  width: 50%;
  display: ${(props) => props.display || "block"};
  @media only screen and (min-width: 768px) {
    width: 45%;
    display: block;
  }
`;
