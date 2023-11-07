import React from "react";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar";
import styled from "styled-components";
import Feed from "./components/Feed";
import { useSelector } from "react-redux";
import { selectUser } from "./features/userSlice";
import Login from "./components/Login";

const LinkedInContainer = styled.div`
  background-color: #f3f2ef;
  height: 100%;
  width: 100%;
`;

const LinkedInBody = styled.div`
  display: flex;
`;

function App() {
  const user = useSelector(selectUser);

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