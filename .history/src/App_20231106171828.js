import React from "react";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar";
import styled from "styled-components";
import Feed from "./components/Feed";

const LinkedInContainer = styled.div`
  background-color: #f3f2ef;
`;

const LinkedInBody = styled.div`
  display: flex;
`;

function App() {
  return (
    <LinkedInContainer>
      <Header />
      <LinkedInBody>
        <Sidebar />
        <Feed/>
      </LinkedInBody>
    </LinkedInContainer>
  );
}

export default App;
