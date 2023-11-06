import React from "react";
import { HomeMax, Search, SupervisorAccount } from "@mui/icons-material";
import styled from "styled-components";
import HeaderOption from "../HeaderOption/HeaderOption";
import { Home } from "@material-ui/icons";

const HeaderContainer = styled.div`
  position: sticky;
  top: 0;
  z-index: 999;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  border-bottom: 0.1px solid lightgray;
  padding-top: 10px;
  padding-bottom: 10px;
  width: 100%;
  background-color: white;
`;

const LeftContainer = styled.div`
  display: flex;
`;

const LogoImage = styled.img`
  height: 70px;
  margin-right: 10px;
  object-fit: contain;
`;

const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
  border-radius: 5px;
  height: 22px;
  color: gray;
  background-color: #eef3f8;
`;

const SearchInput = styled.input`
  outline: none;
  border: none;
  background: none;
`;

const RightContainer = styled.div`
  display: flex;
`;

function Header() {
  return (
    <HeaderContainer>
      <LeftContainer>
        <LogoImage
          src="https://i.ibb.co/P51pbfT/Screenshot-2023-11-06-at-11-59-00-am.png"
          alt="linedIn-clone"
        />
        <SearchContainer>
          <Search />
          <SearchInput />
        </SearchContainer>
      </LeftContainer>
      <RightContainer>
        <HeaderOption Icon={HomeMax} avatar title="Home" />
        <HeaderOption Icon={SupervisorAccount} avatar title="My Network" />
      </RightContainer>
    </HeaderContainer>
  );
}

export default Header;
