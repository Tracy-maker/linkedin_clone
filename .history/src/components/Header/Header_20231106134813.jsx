import React from "react";
import Search from "@mui/icons-material/Search";
import HeaderOption from "../HeaderOption/HeaderOption.jsx";
import HomeIcon from "@mui/icons-material/Home";
import SupervisorAccountIcon from "@mui/icons-material/SupervisorAccount";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import ChatIcon from "@mui/icons-material/Chat";
import NotificationsIcon from "@mui/icons-material/Notifications";
import styled from "styled-components";

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
  height: 47px;
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
          src="https://i.ibb.co/qBQbcDx/Screenshot-2023-11-06-at-11-59-00-am.png"
          alt="logo image"
        />
        <SearchContainer>
          <Search />
          <SearchInput />
        </SearchContainer>
      </LeftContainer>
      <RightContainer>
        <HeaderOption Icon={HomeIcon} title="Home" />
        <HeaderOption Icon={SupervisorAccountIcon} title="Network" />
        <HeaderOption Icon={BusinessCenterIcon} title="Jobs" />
        <HeaderOption Icon={ChatIcon} title="Messaging" />
        <HeaderOption Icon={NotificationsIcon} title="Notifications" />
        <HeaderOption
          avatar="https://i.ibb.co/MRHHtS5/Wechat-IMG7.jpg"
          title="me"
        />
      </RightContainer>
    </HeaderContainer>
  );
}

export default Header;
