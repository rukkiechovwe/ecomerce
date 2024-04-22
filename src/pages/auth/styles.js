import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  min-height: 100vh;
  overflow: auto;
`;
export const FormContainer = styled.div`
  width: 35%;
  height: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  background: #fff;
  @media only screen and (max-width: 768px) {
    width: 100%;
  }
`;

export const LoginText = styled.h3`
  text-align: center;
`;
export const AuthForm = styled.form`
  width: 100%;
  padding: 15px;
  height: 100%;
  @media only screen and (min-width: 500px) {
    width: 70%;
  }
  @media only screen and (min-width: 768px) {
    width: 100%;
  }
`;

export const Onboarding = styled.div`
		text-align: center;
		width: 65%;
		height 100%;
		min-height: 100vh;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: 2rem;
		background: hsl(163,53%,46%);

	@media only screen and (max-width: 768px) {
		display: none;
	}
`;
export const ImgContainer = styled.div`
  height: 24rem;
`;
export const Title = styled.h1`
  color: #fff;
  padding: 3rem 0 0;
`;
export const Text = styled.p`
  color: #fff;
  padding: 1rem 0;
`;
export const Login = styled.p`
  text-align: center;
  font-size: 13px;
`;
export const NavLink = styled(Link)`
  color: hsla(184, 50%, 45%, 1);
`;
