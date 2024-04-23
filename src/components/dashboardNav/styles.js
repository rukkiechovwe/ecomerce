import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Header = styled.div`
  background-color: #fff;
  width: 250px;
  overflow: hidden;
  height: 100vh;
  position: fixed;
`;
export const Container = styled.nav`
  height: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

`;
export const Ul = styled.ul`
  display: flex;
  flex-direction: column;
  color: #000000;
  height: 100%;
  padding-bottom: 3rem;
`;
export const NavContainer = styled.li`
  list-style: none;
`;
export const ButtonContainer = styled.div`
  list-style: none;
  font-size: 0.9rem;
  padding: 1rem;
  text-align: center;
  font-weight: 900;
  width: 100%;
`;
export const Logo = styled(NavLink)`
  display: inline-block;
  font-size: 2rem;
  font-family: "Mabry Pro Bold";
  text-align: center;
  padding: 1rem 0 2rem;
  transition: all 0.2s linear 0s;
`;

export const Link = styled(NavLink)`
  display: flex;
  align-items: center;
  width: 100%;
  font-size: 0.9rem;
  font-weight: 500;
  padding: 1rem;
  transition: all 0.2s linear 0s;
  &:hover,
  &.active {
    color: hsl(163, 53%, 46%) !important;
    padding-right: 0px;
    transition: all 0.2s linear 0s;
  }

  @media only screen and (max-width: 768px) {
  }
`;
