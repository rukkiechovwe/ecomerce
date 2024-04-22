import styled from "styled-components";
export const Button = styled.button`
   font-weight: 500;
   font-family: 'Mabry Pro';
   font-size: inherit;
   margin: 1rem 0;
   padding: 12px;
   border: none;
   border-radius: 50px;
   display: flex;
   align-items: center;
   justify-content: center;
   width: ${(props) => props.width || "100%"};
   position: ${(props) => (props.position ? "absolute" : "unset")};
   top: ${(props) => (props.position ? "-12px" : "0")};
   right: ${(props) => (props.position ? "0" : "0")};
   color: ${(props) => (props.color ? props.color : "#fff")};
   text-transform: ${(props) => props.textTransform || "capitalize"};
   background: ${(props) => props.background || "hsl(163,53%,46%);"};

}
`;
