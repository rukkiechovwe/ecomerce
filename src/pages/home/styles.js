import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  background: #fff;
`;

export const Hero = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: auto;
  border-radius: 8px;
  padding: 2rem 0;
  @media only screen and (min-width: 768px) {
    flex-direction: row;
    min-height: 100vh;
    padding: 0;
  }
`;
export const HeroText = styled.div`
  width: 100%;
  padding-bottom: 1rem;
  @media only screen and (min-width: 768px) {
    width: 55%;
    padding-right: 1rem;
  }
`;
export const Heading = styled.h1`
  font-size: 2.575rem;
  line-height: 2.1625rem;
  padding: 1rem 0;
  color: #222;
  width: 90%;
  @media only screen and (min-width: 600px) {
    font-size: 5.075rem;
    line-height: 4.5625rem;
  }
`;
export const Para = styled.p`
  width: 70%;
  font-size: 1rem;
  padding: 1rem 0;
  color: #777777;
  @media only screen and (min-width: 600px) {
    font-size: 1.2rem;
  }
`;


export const ProductWrapper = styled.div`
  background: #f9f9f9;
  padding: 2rem 2rem 3rem;
`;

export const ProductsHeading = styled.h2`
  text-align: center;
  font-size: 1.275rem;
  line-height: 1.1625rem;
  color: #222;
  padding: 2rem 0 4rem;
  @media only screen and (min-width: 600px) {
    font-size: 2.275rem;
    line-height: 1.2625rem;
  }
`;

export const Products = styled.div`
  color: #222;
  display: grid;
  grid-template-columns: 100%;
  gap: 15px;

  @media only screen and (min-width: 450px) {
    grid-template-columns: 49% 49%;
  }

  @media only screen and (min-width: 600px) {
    grid-template-columns: 32% 32% 32%;
  }

  @media only screen and (min-width: 768px) {
    grid-template-columns: 24% 24% 24% 24%;
  }
`;
