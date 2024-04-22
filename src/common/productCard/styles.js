import styled from "styled-components";

export const ProductCard = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 10px;
  background: #fff;
  border-radius: 8px;
  cursor: pointer;
  box-shadow: rgba(94, 93, 93, 0.08) 0px 2px 10px;
  position: relative;

  ::after {
    content: "";
    display: block;
    margin-left: 100%;
  }
  :hover::after {
    background: hsla(163.1, 53%, 45.9%, 0.17);
    width: 100%;
    height: 100%;
    position: absolute;
    right: 0;
    top: 0;
    border-radius: 7px;
    transition: all 0.3s linear 0s;
  }
`;

export const ImageDiv = styled.div`
  padding: 0.5rem 0;
  height: ${(props) => (props.height ? props.height : "100%")};
  width: ${(props) => (props.width ? props.width : "100%")};
`;
export const Name = styled.p`
  font-weight: 100;
  padding: 2rem 0 8px;
  width: 100%;
  height: 65px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;
export const Price = styled.span`
  padding: 3px 0;
  font-weight: 600;
  font-size: 1.1rem;
  font-family: "Mabry Pro";
`;
