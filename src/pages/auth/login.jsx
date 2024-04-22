import React from "react";
import * as S from "./styles";
import InputField from "../../common/input";
import Button from "../../common/button";
import useAuth from "../../hooks/useAuth";
import AppIllustration from "../../common/appIllustration";
import { LoginValidation } from "../../config/validate";

const Login = () => {
  const {
    email,
    setEmail,
    password,
    setPassword,
    errors,
    authErr,
    setErrors,
    loading,
    googleLoading,
    signInUser,
    signInWithGoogle,
  } = useAuth();

  return (
    <S.Container>
      <S.Onboarding>
        <S.ImgContainer>
          <AppIllustration />
        </S.ImgContainer>
        <S.Title>Welcome Back!</S.Title>
        <S.Text>Please, login to your account</S.Text>
      </S.Onboarding>
      <S.FormContainer>
        <S.LoginText>Sign In</S.LoginText>
        <p className="err">{authErr}</p>
        <S.AuthForm>
          <InputField
            title="Email"
            type="email"
            placeholder="hello@gmail.com"
            onChange={(e) => {
              setEmail(e.target.value.trim());
            }}
            error={errors.email}
          />
          <InputField
            title="Password"
            type="password"
            placeholder="minimum of 6 characters"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            error={errors.password}
          />
          <Button
            disabled={loading}
            onClick={(e) => {
              e.preventDefault();
              let errors = LoginValidation(email.trim(), password);
              if (Object.keys(errors).length === 0) {
                signInUser(email.trim(), password);
              } else {
                setErrors(errors);
              }
            }}
            textTransform="uppercase"
          >
            {loading ? "please wait..." : " sign in"}
          </Button>
          <S.Login>OR SIGN IN WITH</S.Login>
          <Button
            onClick={(e) => {
              signInWithGoogle(e);
            }}
            background="#d33d2b"
            textTransform="uppercase"
          >
            {googleLoading ? "please wait..." : "Google"}
          </Button>
          <S.Login>
            Don't have an account?
            <S.NavLink to="/sign-up"> Signup here</S.NavLink>
          </S.Login>
        </S.AuthForm>
      </S.FormContainer>
    </S.Container>
  );
};

export default Login;
