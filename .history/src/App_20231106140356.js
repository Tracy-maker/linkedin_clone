import React from "react";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar";
import styled from "styled-components";

const LinkedInContainer= styled.div`
 background-color: #f3f2ef;
`

function App() {
  return (
    <div className="app">
      <Header />
      <div>
        <Sidebar />
      </div>
    </div>
  );
}

export default App;
