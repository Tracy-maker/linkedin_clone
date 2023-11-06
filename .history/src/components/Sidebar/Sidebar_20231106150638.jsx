import styled from "styled-components";
import { Avatar } from "@mui/material";

const SidebarContainer = styled.div`
  position: sticky;
  top: 80px;
  flex: 0.2;
  border-radius: 10px;
  text-align: center;
  height: fit-content;
`;

const SidebarTop = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid lightgray;
  border-bottom: 0;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  background-color: white;
  padding-bottom: 10px;
`;

const TopImage = styled.img`
  margin-bottom: -20px;
  width: 100%;
  height: 60px;
  object-fit: cover;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
`;

const TopHeading = styled.h2`
  font-size: 18px;
`;

const TopSubHeading = styled.h4`
  color: gray;
  font-size: 12px;
`;

const SidebarAvatar = styled(Avatar)`
  margin-bottom: 10px;
`;

const SidebarStats = styled.div`
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid lightgray;
  background-color: white;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
`;

const StatContainer = styled.div`
  margin-top: 10px;
  display: flex;
  justify-content: space-between;
`;

const StatText = styled.p`
  color: gray;
  font-size: 13px;
  font-weight: 600;
`;

const StatNumber = styled.p`
  font-weight: bold;
  color: #0a66c2 !important;
`;

const SidebarBottom = styled.div`
  text-align: left;
  padding: 10px;
  border: 1px solid lightgray;
  background-color: white;
  border-radius: 10px;
  margin-top: 10px;
`;

const BottomText = styled.p`
  font-size: 13px;
  padding-bottom: 10px;
`;

const RecentItem = styled.div`
  display: flex;
  font-size: 13px;
  color: gray;
  font-weight: bold;
  cursor: pointer;
  margin-bottom: 5px;
  padding: 5px;

  &:hover {
    background-color: whitesmoke;
    border-radius: 10px;
    cursor: pointer;
    color: black;
  }
`;

const HashSymbol = styled.span`
  margin-right: 10px;
  margin-left: 5px;
`;

const Sidebar = () => {
  const recentItem = (topic) => (
    <RecentItem>
      <HashSymbol>#</HashSymbol>
      <p>{topic}</p>
    </RecentItem>
  );

  return (
    <SidebarContainer>
      <SidebarTop>
        <TopImage
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrXJ2KHhaIrzbLGGpi4dyRdlsjMp5KQZZ2QA7C3HeFESqHLc7PPisI42A1BJY0jh3Nn44&usqp=CAU"
          alt="logo-image"
        />
        <SidebarAvatar
          src="https://i.ibb.co/MRHHtS5/Wechat-IMG7.jpg"
          alt="logo-image"
        />
        <TopHeading>Yingxin Zhang</TopHeading>
        <TopSubHeading>ydlvns@gmail.com</TopSubHeading>
      </SidebarTop>
      <SidebarStats>
        <StatContainer>
          <StatText>Who Viewed You</StatText>
          <StatNumber>432</StatNumber>
        </StatContainer>
        <StatContainer>
          <StatText>Views on posts</StatText>
          <StatNumber>82</StatNumber>
        </StatContainer>
      </SidebarStats>
      <SidebarBottom>
        <BottomText>Recent</BottomText>
        {recentItem("hacking")}
        {recentItem("programing")}
        {recentItem("imrankahn")}
        {recentItem("pakistan")}
        {recentItem("fifa")}
      </SidebarBottom>
    </SidebarContainer>
  );
};

export default Sidebar;
