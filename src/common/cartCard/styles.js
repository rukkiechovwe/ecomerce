import styled from "styled-components";

export const CartCard = styled.div`
  margin: 10px;
  padding: 10px 1.5rem;
  width: 100%;
  min-height: 100px;
  position: relative;
  background: #fff;
  border-radius: 8px;
  border: 1px solid hsl(0, 0%, 90.2%);
`;

export const Flex = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
`;
export const Container = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;

  @media only screen and (max-width: 560px) {
    flex-direction: column;
  }
`;
export const ImageDiv = styled.div`
  padding: 0 1rem 0 0;
  height: ${(props) => (props.height ? props.height : "100%")};
  width: ${(props) => (props.width ? props.width : "100%")};
`;

export const Name = styled.p`
  font-weight: 600;
  padding: 0 0 8px;
  width: 90%;

  @media only screen and (max-width: 560px) {
    width: 100%;
    text-align: center;
  }
`;
export const Price = styled.span`
  font-weight: 600;
  padding: 3px 0;
  color: hsl(163, 53%, 46%);
`;

export const QuantityContainer = styled.div`
  display: flex;
  align-items: center;
`;
export const Quantity = styled.span`
  font-size: 1rem;
  margin: 0 10px;
  border-left: 1px solid hsl(0, 0%, 90.2%);
  border-right: 1px solid hsl(0, 0%, 90.2%);
  padding: 0 10px;
`;
export const Delete = styled.button``;

export const Button = styled.button`
  border: none;
  text-align: center;
  background: transparent;
  height: 30px;
  width: 14px;
  display: flex;
  justify-content: center;

  @media only screen and (max-width: 560px) {
    align-self: end;
  }
`;
