import styled from "styled-components";
import { PaystackButton } from "react-paystack";

export const Wrapper = styled.div`
  height: 100vh;
  width: 100%;
  position: fixed;
  z-index: 99;
  background: #00000075;
  left: 0;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
`;
export const Container = styled.div`
  background: white;
  max-height: 500px;
  width: 500px;
  padding: 10px 20px;
  border-radius: 5px;
  overflow: auto;
  position: relative;
  padding-top: 4rem;
`;

export const Payment = styled.div`
  padding: 30px 20px;
  text-align: center;
`;

export const Button = styled(PaystackButton)`
  font-weight: 500;
  margin: 1rem 0;
  padding: 10px;
  width: 100%;
  border: none;
  background: hsl(163, 53%, 46%);
  background: hsl(163, 53%, 46%);
  border-radius: 5px;
  color: #fff;
  text-transform: capitalize;
`;

export const HeadingText = styled.h3`
  font-size: 1.5rem;
  line-height: 2rem;
`;
export const TitleText = styled.p`
  font-size: 1.05rem;
  font-weight: 500;
  text-transform: capitalize;
  border-bottom: 1px solid hsl(0, 0%, 90.2%);
  padding: 0 0 10px;
}
`;
export const Total = styled.p`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid hsl(0, 0%, 90.2%);
  padding: 10px 0;
`;
