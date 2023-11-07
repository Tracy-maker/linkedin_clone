import React, { useEffect } from "react";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar";
import styled from "styled-components";
import Feed from "./components/Feed";
import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "./features/userSlice";
import Login from "./components/Login";
import { auth } from "./firebase";

const LinkedInContainer = styled.div`
  background-color: #f3f2ef;
  min-height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const LinkedInBody = styled.div`
  display: flex;
  flex: 1;
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
  });

  return (
    <LinkedInContainer>
      <Header />

      {!user ? (
        <Login />
      ) : (
        <LinkedInBody>
          <Sidebar />
          <Feed />
        </LinkedInBody>
      )}
    </LinkedInContainer>
  );
}

export default App;
