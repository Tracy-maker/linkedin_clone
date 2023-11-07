import React from "react";
import styled from "styled-components";

const LoginContainer = styled.div`
  display: grid;
  place-items: center;
  margin-left: auto;
  margin-right: auto;
  padding-top: 100px;
  padding-bottom: 100px;
`;

const LinkedinImage = styled.img`
  object-fit: contain;
  height: 70px;
  margin-top: 20px;
  margin-bottom: 20px;
`;

const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  margin-top: 40px;
`;

const Input = styled.input`
  width: 365px;
  height: 50px;
  font-size: 20px;
  padding-left: 15px;
  margin-bottom: 30px;
  border-radius: 5px;
`;

const SignInButton = styled.button`
  height: 58px;
  font-size: large;
  color: #ffffff;
  background: #0074b1;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    font-weight: 800;
    background: rgb(101, 215, 250);
  }
`;

const OptionWords = styled.p`
padding:15px`;

const RegisterLink = styled.span`
  padding-left: 20px;
  color: #0177b7;
  cursor: pointer;
`;
function Login() {
  return (
    <LoginContainer>
      <LinkedinImage
        src="https://i.ibb.co/qBQbcDx/Screenshot-2023-11-06-at-11-59-00-am.png"
        alt="Linkedin"
      />
      <LoginForm action="">
        <Input type="text" placeholder="Full name required" />
        <Input placeholder="Profile pic URL (optional)" type="text" required />
        <Input placeholder="Email" type="email" required />
        <Input placeholder="password" />
        <SignInButton>Sign In</SignInButton>
        <OptionWords>
          Not a member?
          <RegisterLink>Register Now</RegisterLink>
        </OptionWords>
      </LoginForm>
    </LoginContainer>
  );
}

export default Login;
