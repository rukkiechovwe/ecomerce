import React from "react";
import * as S from "./styles";
import Button from "../../common/button";
import InputField from "../../common/input";
import useAuth from "../../hooks/useAuth";
import AppIllustration from "../../common/appIllustration";
import { SignupValidation } from "../../config/validate";


const Signup = () => {
  const {
    userName,
    setUserName,
    email,
    setEmail,
    password,
    setPassword,
    errors,
    setErrors,
    authErr,
    loading,
    googleLoading,
    signUpUser,
    signupWithGoogle,
  } = useAuth();

  return (
    <S.Container>
      <S.Onboarding>
        <S.ImgContainer>
          <AppIllustration />
        </S.ImgContainer>
        <S.Title>Hello There!</S.Title>
        <S.Text>Please, create an account</S.Text>
      </S.Onboarding>
      <S.FormContainer>
        <S.LoginText>Create An Account</S.LoginText>
        <p className="err">{authErr}</p>
        <S.AuthForm>
          <InputField
            title="Name"
            name="fullName"
            type="text"
            placeholder="john doe"
            onChange={(e) => {
              setUserName(e.target.value);
            }}
            error={errors.fullName}
          />

          <InputField
            title="Email"
            type="email"
            name="email"
            placeholder="hello@gmail.com"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            error={errors.email}
          />
          <InputField
            title="Password"
            type="password"
            name="password"
            placeholder="minimum of 8 characters"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            error={errors.password}
          />

          <Button
            disabled={loading}
            onClick={(e) => {
              e.preventDefault();
              let errors = SignupValidation(userName, email.trim(), password);
              if (Object.keys(errors).length === 0) {
                signUpUser(userName, email.trim(), password);
              } else {
                setErrors(errors);
              }
            }}
            textTransform="uppercase"
          >
            {loading ? "please wait..." : " create an account"}
          </Button>
          <S.Login>OR SIGN UP WITH</S.Login>
          <Button
            onClick={(e) => {
              signupWithGoogle(e);
            }}
            background="#d33d2b"
            textTransform="uppercase"
          >
            {googleLoading ? "please wait..." : "Google"}
          </Button>
          <S.Login>
            Already have an account?
            <S.NavLink to="/sign-in"> Login here</S.NavLink>
          </S.Login>
        </S.AuthForm>
      </S.FormContainer>
    </S.Container>
  );
};

export default Signup;
