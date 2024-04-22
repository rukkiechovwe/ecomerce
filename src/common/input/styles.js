import styled from "styled-components";

export const Container = styled.div`
  margin: 1rem 0;
  width: 100%;
  @media only screen and (min-width: 450px) {
    width: ${(props) => props.width || "100%"};
    margin: ${(props) => props.margin || "1rem 0"};
  }
`;
export const Input = styled.input`
  width: 100%;
  background: #fff;
  border: 1px solid hsl(0, 0%, 90.2%);
  margin: 0.5rem 0 0;
  color: #222;
  padding: 12px 15px;
  border-radius: 5px;
  :focus {
    padding: 0.8rem;
    border: 1px solid hsl(163, 53%, 46%);
  }
  ::placeholder {
    color: #7b7b7b;
    font-size: 14px;
  }
`;
export const Label = styled.label`
  padding: 0.5rem 0;
  font-size: 14px;
`;
export const ErrorText = styled.span`
  color: #ff2424;
`;
