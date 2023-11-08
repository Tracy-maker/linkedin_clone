import React, { useEffect } from "react";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar";
import styled from "styled-components";
import Feed from "./components/Feed";
import { useDispatch, useSelector } from "react-redux";
import { login, logout, selectUser } from "./features/userSlice";
import Login from "./components/Login";
import { auth } from "./firebase";
import Widgets from "./components/Widgets";

const LinkedInContainer = styled.div`
  background-color: #f3f2ef;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const LinkedInBody = styled.div`
  display: flex;
  margin-top: 35px;
  max-width: 1200px;
  margin-left: 20px;
  margin-right: 20px;
`;

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        dispatch(
          login({
            email: userAuth.email,
            uid: userAuth.uid,
            displayName: userAuth.displayName,
            photoUrl: userAuth.photoUrl,
          })
        );
      } else {
        dispatch(logout());
      }
    });
  }, []);

  return (
    <LinkedInContainer>
      <Header />
      {!user ? (
        <Login />
      ) : (
        <LinkedInBody>
          <Sidebar />
          <Feed />
          <Widgets />
        </LinkedInBody>
      )}
    </LinkedInContainer>
  );
}

export default App;
