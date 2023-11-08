import React, { useState } from "react";
import styled from "styled-components";
import { login } from "../../features/userSlice";
import { auth } from "../../firebase";
import { useDispatch } from "react-redux";

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
  padding: 15px;
`;

const RegisterLink = styled.span`
  color: #0177b7;
  cursor: pointer;
`;

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullName, setFullName] = useState("");
  const [profilePic, setProfilePic] = useState("");
  const dispatch = useDispatch();

  const register = () => {
    if (!fullName) {
      return alert("Please enter a full name...");
    }
    createUserWithEmailAndPassword(auth, email, password)
      .then((userAuth) => {
        userAuth.user
          .updateProfile({
            displayName: fullName,
            photoURL: profilePic,
          })
          .then(() => {
            dispatch(
              login({
                email: userAuth.user.email,
                uid: userAuth.user.uid,
                displayName: fullName,
                photoUrl: profilePic,
              })
            );
          });
      })
      .catch((err) => alert(err));
  };

  const loginForm = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userAuth) => {
        dispatch(
          login({
            email: userAuth.user.email,
            uid: userAuth.user.uid,
            displayName: userAuth.user.displayName,
            profileUrl: userAuth.user.photoURL,
          })
        );
      })
      .catch((error) => alert(error));
  };
  return (
    <LoginContainer>
      <LinkedinImage
        src="https://i.ibb.co/qBQbcDx/Screenshot-2023-11-06-at-11-59-00-am.png"
        alt="Linkedin"
      />
      <LoginForm action="">
        <Input
          type="text"
          placeholder="Full name required"
          value={fullName}
          required
          onChange={(e) => setFullName(e.target.value)}
        />
        <Input
          placeholder="Profile pic URL (optional)"
          type="text"
          value={profilePic}
          onChange={(e) => setProfilePic(e.target.value)}
        />
        <Input
          placeholder="Email"
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          placeholder="password"
          type="password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <SignInButton onClick={loginForm}>Sign In</SignInButton>
        <OptionWords>
          Not a member?{" "}
          <RegisterLink onClick={register}> Register Now</RegisterLink>
        </OptionWords>
      </LoginForm>
    </LoginContainer>
  );
}

export default Login;
